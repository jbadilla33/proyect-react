import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { Pets } from "@mui/icons-material";

const Hero = ({ onScrollToSection }) => {
  return (
    <Box
      sx={{
        bgcolor: "#e3f2fd",
        py: { xs: 6, md: 10 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "50%",
          height: "100%",
          backgroundImage:
            "url(https://placehold.co/800x400/E1F5FE/333?text=Mascotas+Felices)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.3,
          zIndex: 1,
        }}
      />
      <Box sx={{ position: "relative", zIndex: 2 }}>
        <Box sx={{ maxWidth: "1200px", margin: "0 auto", px: 2 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h2"
                fontWeight="700"
                color="#1976d2"
                gutterBottom
              >
                Cuidado Veterinario de Excelencia
              </Typography>
              <Typography variant="h5" color="text.secondary" paragraph>
                Donde tu mascota recibe el mejor tratamiento con amor y
                profesionalismo
              </Typography>
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mt: 4 }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  startIcon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.7 15.9 15.9 0 0 1 1.02 5.88 2 2 0 0 1-1.23 2.24l-2.33 1.2a16 16 0 0 0 7.07 7.07l1.2-2.33a2 2 0 0 1 2.24-1.23 15.9 15.9 0 0 1 5.88 1.02A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  }
                  onClick={() => onScrollToSection("contacto")}
                  sx={{ py: 1.5 }}
                >
                  Programar Cita
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  onClick={() => onScrollToSection("servicios")}
                  sx={{ py: 1.5 }}
                >
                  Nuestros Servicios
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
