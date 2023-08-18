import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
import { Formik, Form, Field } from "formik";

const TransferForm = ({carId}) => {
const [open, setOpen] = useState(false);
const [car,setCard] = useState(carId)
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFormSubmit = async (values) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/users`,
        values
      );
      console.log("Response:", response.data);
      handleClose();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Transfer Oluştur
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Hasta Bilgileri</DialogTitle>
        <Formik
          initialValues={{
            name: "",
            surname: "",
            phoneNumber: "",
            age: "",
            date: "",
            destination: "",
            car: car,
          }}
          onSubmit={handleFormSubmit}
        >
          {({ values, handleChange }) => (
            <Form>
              <DialogContent>
                <Field
                  autoFocus
                  margin="dense"
                  id="name"
                  label="İsim"
                  type="text"
                  fullWidth
                  variant="outlined"
                  name="name"
                  component={TextField}
                  value={values.name}
                  onChange={handleChange}
                />
                <Field
                  autoFocus
                  margin="dense"
                  id="surname"
                  label="Soyisim"
                  type="text"
                  fullWidth
                  variant="outlined"
                  name="surname"
                  component={TextField}
                  value={values.surname}
                  onChange={handleChange}
                />
                <Field
                  autoFocus
                  margin="dense"
                  id="phoneNumber"
                  label="Telefon"
                  type="number"
                  fullWidth
                  variant="outlined"
                  name="surname"
                  component={TextField}
                  value={values.phoneNumber}
                  onChange={handleChange}
                />
                <Field
                  autoFocus
                  margin="dense"
                  id="age"
                  label="Yaş"
                  type="text"
                  fullWidth
                  variant="outlined"
                  name="age"
                  component={TextField}
                  value={values.age}
                  onChange={handleChange}
                />
                <Field
                  autoFocus
                  margin="dense"
                  id="date"
                  label="Tarih"
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
