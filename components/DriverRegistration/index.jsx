import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import axios from "axios";
import { Formik, Form, Field } from "formik";
import { toast } from "react-toastify";

const DriverForm = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFormSubmit = async (values) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/drivers`,
        values
      );
      console.log("Response:", response.data);
      handleClose();
      toast.success("Şöför Oluşturma Başarılı");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Şöför Oluşturma Başarısız");
    }
  };

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        startIcon={<DirectionsCarIcon />}
        onClick={handleClickOpen}
      >
        Söför Giriş
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Şöför Bilgileri</DialogTitle>
        <Formik
          initialValues={{
            name: "",
            surname: "",
            phoneNumber: "",
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
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Kapat</Button>
                <Button type="submit">Şöför Oluştur</Button>
              </DialogActions>
            </Form>
          )}
        </Formik>
      </Dialog>
    </div>
  );
};
export default DriverForm;
