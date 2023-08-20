import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import axios from "axios";

const TransferTable = () => {
  const [tranfers, setTransfer] = useState([]);

  useEffect(() => {
    const getPatient = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/transfer`
        );
        setTransfer(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getPatient();
  }, []);

  console.log(tranfers);

const rows = tranfers.map((transfer, index) => {
  const formattedDate = new Date(transfer.date).toLocaleDateString("tr-TR"); 

  return {
    id: index + 1,
    fullName: `${transfer.patientInfo.name} ${transfer.patientInfo.surname}`,
    phoneNumber: transfer.patientInfo.phoneNumber,
    age: transfer.patientInfo.age,
    location: transfer.destination,
    date: formattedDate,
    driver: `${transfer.driverInfo.name} ${transfer.driverInfo.surname}`,
    driverPhone: transfer.driverInfo.phoneNumber,
    car:
      (transfer.car === "1" && "Toyota Corolla") ||
      (transfer.car === "2" && "VW Passat") ||
      (transfer.car === "3" && "Mercedes Vito") ||
      (transfer.car === "4" && "Mercedes Sprinter"),
  };
});


  const columns = [
    { field: "fullName", headerName: "Adı Soyadı", width: 170 },
    { field: "age", headerName: "Yaş", type: "number", width: 170 },
    { field: "phoneNumber", headerName: "Telefon", width: 270 },
    { field: "driver", headerName: "Şöför Adı", width: 270 },
    { field: "driverPhone", headerName: "Şöför Telefon", width: 270 },
    { field: "car", headerName: "Araç", width: 170 },
    { field: "date", headerName: "Tarih", width: 170 },
    { field: "location", headerName: "Lokasyon", width: 170 },
  ];

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Card>
        <Typography variant="h6" sx={{ my: "20px", px: "10px" }}>
          Transfer Sürecindekiler
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
};
export default TransferTable;
