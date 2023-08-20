import React from 'react'
import UserList from '@/components/UserTable'
import DriverList from "@/components/DriverTable"
import Grid from "@mui/material/Grid";
import VehicleDetail from '@/components/Ui/vehicleDetail';
const Dashboard = () => {
  return (
    <>
      <Grid container gap={2} >
        <VehicleDetail />
        <Grid item xs={4} sm={6} md={3} lg={12}>
          <UserList />
        </Grid>
        <Grid item xs={8} sm={6} md={3} lg={12}>
          <DriverList />
        </Grid>
      </Grid>
    </>
  );
}

export default Dashboard