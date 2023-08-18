import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";


const columns = [
  { field: "id", headerName: "ID", width: 170 },
  { field: "firstName", headerName: "First name", width: 270 },
  { field: "lastName", headerName: "Last name", width: 270 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 270,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 270,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: "100%", }}>
      <Card>
        <Typography variant="h6" sx={{ my: "20px", px: "10px" }}>
          Transfer Bekleyen Müşteriler
        </Typography>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
       
      </Card>
    </div>
  );
}
