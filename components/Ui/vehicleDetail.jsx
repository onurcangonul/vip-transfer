import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Grid from "@mui/material/Grid";
import TransferForm from "@/components/TransferModal";

function VehicleDetail() {
  const data = [
    {
      id: 1,
      image: "/images/corolla.png",
      title: "Toyota Corolla",
      description: "4+1",
    },
    {
      id: 2,
      image: "/images/passat.png",
      title: "VW Passat",
      description: "4+1",
    },
    {
      id: 3,
      image: "/images/vito.png",
      title: "Mercedes Vito",
      description: "7+1",
    },
    {
      id: 4,
      image: "/images/mercedes.png",
      title: "Mercedes Sprinter",
      description: "10+1",
    },
  ];

  return (
    <>
      <Grid container spacing={3}>
        {data.map((item) => (
          <Grid item xs={12} sm={6} md={3} key={item.id}>
            <Card sx={{ maxWidth: 445 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={item.image}
                  alt={item.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <TransferForm carId={item.id} />
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
export default VehicleDetail;
