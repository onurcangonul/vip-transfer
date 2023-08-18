import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
const CardUi = () => {
  const data = [
    {
      id: 1,
      title: "Bekleyen Hasta",
      description: "5",
      icon: "Icon 1",
    },
    {
      id: 2,
      title: "Bekleyen Şöför ",
      description: "5",
      icon: "Icon 2",
    },
    {
      id: 3,
      title: "Boşta Araç",
      description: "3",
      icon: "Icon 3",
    },
    {
      id: 4,
      title: "Transfer Sürecindeki Araç",
      description: "2",
      icon: "Icon 4",
    },
  ];

  return (
    <>
        <Grid container spacing={3}>
          {data.map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.id}>
              <Card>
                <CardContent
                  sx={{
                    gap: 3,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <Typography variant="h6">{item.title}</Typography>
                    <Typography variant="h4">{item.description}</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      
    </>
  );
};


export default CardUi;
