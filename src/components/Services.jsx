import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import {
  Healing,
  LocalHospital,
  Psychology,
  Group,
  Close,
} from "@mui/icons-material";

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      name: "Consulta General",
      description: "Evaluación completa de la salud de tu mascota",
      price: "Desde $45",
      icon: <Healing sx={{ fontSize: 40, color: "#1976d2" }} />,
      details:
        "Incluye examen físico completo, revisión de signos vitales, evaluación del estado general y recomendaciones personalizadas.",
    },
    {
      id: 2,
      name: "Vacunación",
      description: "Protección contra enfermedades comunes",
      price: "Desde $30",
      icon: <LocalHospital sx={{ fontSize: 40, color: "#d32f2f" }} />,
      details:
        "Vacunas para perros, gatos y otros animales. Programación según edad y necesidades específicas.",
    },
    {
      id: 3,
      name: "Cirugía",
      description: "Procedimientos quirúrgicos seguros",
      price: "Desde $200",
      icon: <Psychology sx={{ fontSize: 40, color: "#5d4037" }} />,
      details:
        "Cirugías electivas y de emergencia con equipos modernos y personal altamente capacitado.",
    },
    {
      id: 4,
      name: "Hospitalización",
      description: "Cuidado intensivo las 24 horas",
      price: "Desde $80/día",
      icon: <Group sx={{ fontSize: 40, color: "#388e3c" }} />,
      details:
        "Unidad de cuidados intensivos con monitoreo constante y atención personalizada.",
    },
  ];

  return (
    <Box sx={{ py: { xs: 6, md: 10 } }} id="servicios">
      <Box sx={{ maxWidth: "1200px", margin: "0 auto", px: 2 }}>
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#1976d2"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ marginBottom: "16px" }}
          >
            <path d="M21.5 2v6h-6M21.34 16.66A10.5 10.5 0 0 1 12 21.5a10.5 10.5 0 0 1-9.34-5.84M12 2v4M12 17.5v4.5M2 12h4M17 12h5"></path>
          </svg>
          <Typography
            variant="h4"
            fontWeight="700"
            color="text.primary"
            gutterBottom
          >
            Nuestros Servicios
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            maxWidth="800px"
            mx="auto"
          >
            Ofrecemos una amplia gama de servicios veterinarios para garantizar
            la salud y bienestar de tus mascotas
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {services.map((service) => (
            <Grid item xs={12} sm={6} md={3} key={service.id}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: 3,
                  },
                  cursor: "pointer",
                }}
                onClick={() => setSelectedService(service)}
              >
                <Box
                  sx={{
                    p: 3,
                    display: "flex",
                    justifyContent: "center",
                    bgcolor: "primary.main",
                    color: "white",
                  }}
                >
                  {service.icon}
                </Box>
                <CardContent
                  sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
                >
                  <Typography variant="h6" fontWeight="600" gutterBottom>
                    {service.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    paragraph
                    sx={{ flexGrow: 1 }}
                  >
                    {service.description}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      fontWeight="600"
                      color="primary.main"
                    >
                      {service.price}
                    </Typography>
                    <Button
                      size="small"
                      color="primary"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedService(service);
                      }}
                    >
                      Más info
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Service Detail Dialog */}
      <Dialog
        open={!!selectedService}
        onClose={() => setSelectedService(null)}
        maxWidth="sm"
        fullWidth
      >
        {selectedService && (
          <>
            <DialogTitle>
              {selectedService.name}
              <IconButton
                aria-label="close"
                onClick={() => setSelectedService(null)}
                sx={{ position: "absolute", right: 8, top: 8 }}
              >
                <Close />
              </IconButton>
            </DialogTitle>
            <DialogContent>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}
              >
                {selectedService.icon}
                <Box>
                  <Typography variant="h6" fontWeight="600">
                    {selectedService.name}
                  </Typography>
                  <Typography variant="subtitle1" color="primary.main">
                    {selectedService.price}
                  </Typography>
                </Box>
              </Box>
              <DialogContentText sx={{ mt: 2 }}>
                {selectedService.details}
              </DialogContentText>
            </DialogContent>
            <DialogActions sx={{ p: 3 }}>
              <Button onClick={() => setSelectedService(null)}>Cerrar</Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  setSelectedService(null);
                  // Aquí iría la lógica para abrir el formulario de cita
                }}
              >
                Programar Cita
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default Services;
