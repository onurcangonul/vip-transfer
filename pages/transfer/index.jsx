import React from "react";
import UserList from "@/components/UserTable";
import Grid from "@mui/material/Grid";
const Transfer = () => {
  return (
    <>
      <Grid container gap={2}>
        <UserList />
      </Grid>
    </>
  );
};

export default Transfer;
