import { useEffect,useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import axios from "axios";

export default function DataTable() {
 const [patient, setPatient] = useState([]);

 useEffect(() => {
   const getPatient = async () => {
     try {
       const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/patients`);
       setPatient(res.data);
     } catch (err) {
       console.log(err);
     }
   };
   getPatient();
 }, [patient]);

  const rows = patient.map((person, index) => ({
   id: index + 1,
   firstName: person.name,
   lastName: person.surname,
   phoneNumber: person.phoneNumber,
   age: person.age,
 }));


  const columns = [
    { field: "id", headerName: "ID", width: 170 },
    { field: "firstName", headerName: "Adı", width: 270 },
    { field: "lastName", headerName: "Soyadı", width: 270 },
    { field: "phoneNumber", headerName: "Telefon", width: 270 },
    { field: "age", headerName: "Yaş", type: "number", width: 270 },
  ];


  return (
    <div style={{ width: "100%" }}>
      <Card>
        <Typography variant="h6" sx={{ my: "20px", px: "10px" }}>
          Hastalar
        </Typography>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </Card>
    </div>
  );
}

