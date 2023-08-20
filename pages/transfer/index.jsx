import React from "react";
import TransferTable from "@/components/TransferList";
import Grid from "@mui/material/Grid";

const Transfer = () => {
  return (
    <>
      <Grid container gap={2}>
        <TransferTable />
      </Grid>
    </>
  );
};

export default Transfer;
