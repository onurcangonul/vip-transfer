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
       const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users`);
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
   location: person.destination,
   status: "Aktif"
 }));
console.log(patient)


  const columns = [
    { field: "id", headerName: "ID", width: 170 },
    { field: "firstName", headerName: "Adı", width: 170 },
    { field: "lastName", headerName: "Soyadı", width: 170 },
    { field: "phoneNumber", headerName: "Telefon", width: 170 },
    { field: "age", headerName: "Yaş", type: "number", width: 170 },
    { field: "location", headerName: "Lokasyon", width: 170 },
    { field: "status", headerName: "Durum", width: 170 },
  ];


  return (
    <div style={{ height: 400, width: "100%" }}>
      <Card>
        <Typography variant="h6" sx={{ my: "20px", px: "10px" }}>
          Transfer Bekleyen Müşteriler
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

