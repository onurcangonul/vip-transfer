import React from 'react'
import UserList from '@/components/UserTable'
import CardUi from '@/components/Ui/Cards';
import Grid from "@mui/material/Grid";
import VehicleDetail from '@/components/Ui/Cards/vehicle';
const Dashboard = () => {
  return (
    <>
      <Grid container gap={2}>
        <Grid item xs={12}>
          <CardUi />
        </Grid>
        <VehicleDetail/>
        <UserList />
      </Grid>
    </>
  );
}

export default Dashboard