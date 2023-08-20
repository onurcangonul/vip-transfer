import { useState,useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import { Formik, Form, Field } from "formik";
import { toast } from "react-toastify";

const TransferForm = ({carId}) => {
const [open, setOpen] = useState(false);
  const [car, setCard] = useState(carId)
  const [patient, setPatient] = useState([]);
  const [drivers,setDrivers] = useState([])
  const [selectedPatient, setSelectedPatient] = useState("");
  const [selectedDrivers, setSelectedDrivers] = useState("");

  
useEffect(() => {
  const getPatient = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/patients`
      );
      setPatient(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  getPatient();
}, []);
  
  useEffect(() => {
    const getDrivers = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/drivers`
        );
        setDrivers(res.data);

      } catch (err) {
        console.log(err);
      }
    };
    getDrivers();
  }, []);

   const handleChangePatient = (event) => {
     setSelectedPatient(event.target.value);
  };
    const handleChangeDrivers = (event) => {
      setSelectedDrivers(event.target.value);
    };

  
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFormSubmit = async (values) => {
    try {
      const transferData = {
        patientInfo: selectedPatient,
        driverInfo: selectedDrivers,
        ...values,
      };

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/transfer`,
        transferData
      );
      console.log("Response:", response.data);
      toast.success("Transfer Başarılı")
      handleClose();
    } catch (error) {
      console.error("Error:", error);
      toast.error("Transfer Başarısız");

    }
  };


  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Transfer Oluştur
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Transfer Bilgileri</DialogTitle>
        <Formik
          initialValues={{
            date: "",
            destination: "",
            car: car,
          }}
          onSubmit={handleFormSubmit}
        >
          {({ values, handleChange }) => (
            <Form>
              <DialogContent >
                <Field
                  autoFocus
                  margin="dense"
                  id="destination"
                  label={
                    (carId === 1 && "Toyota Corolla") ||
                    (carId === 2 && "VW Passat") ||
                    (carId === 3 && "Mercedes Vito") ||
                    (carId === 4 && "Mercedes Sprinter")
                  }
                  type="text"
                  fullWidth
                  name="destination"
                  variant="outlined"
                  component={TextField}
                  disabled
                />
                <FormControl fullWidth sx={{mb:"5px"}}>
                  <InputLabel id="patient-label">Hasta Seç</InputLabel>
                  <Select
                    labelId="patient-label"
                    id="patient"
                    value={selectedPatient}
                    onChange={handleChangePatient}
                    label="Hasta Seç"
                    name="patient"
                  >
                    <MenuItem value="" disabled>
                      Seçiniz
                    </MenuItem>
                    {patient.map((item) => (
                      <MenuItem key={item.id} value={item}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel id="driver-label">Şoför Seç</InputLabel>
                  <Select
                    labelId="driver-label"
                    id="driver"
                    value={selectedDrivers}
                    onChange={handleChangeDrivers}
                    label="Şoför Seç"
                    name="driver"
                  >
                    <MenuItem value="" disabled>
                      Seçiniz
                    </MenuItem>
                    {drivers.map((item) => (
                      <MenuItem key={item.id} value={item}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <Field
                  autoFocus
                  margin="dense"
                  id="date"
                  type="date"
                  fullWidth
                  name="date"
                  component={TextField}
                  value={values.date}
                  onChange={handleChange}
                />
                <Field
                  autoFocus
                  margin="dense"
                  id="destination"
                  label="Varış Noktası"
                  type="text"
                  fullWidth
                  name="destination"
                  variant="outlined"
                  component={TextField}
                  value={values.destination}
                  onChange={handleChange}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Kapat</Button>
                <Button type="submit">Transfer Oluştur</Button>
              </DialogActions>
            </Form>
          )}
        </Formik>
      </Dialog>
    </div>
  );
};
export default TransferForm;
