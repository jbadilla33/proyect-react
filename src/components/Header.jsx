import React, { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import { Pets, Menu as MenuIcon } from "@mui/icons-material";

const Header = ({ onScrollToSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { label: "Servicios", section: "servicios" },
    { label: "Doctores", section: "doctores" },
    { label: "Testimonios", section: "testimonios" },
    { label: "Contacto", section: "contacto" },
  ];

  const drawer = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={handleDrawerToggle}
      onKeyDown={handleDrawerToggle}
    >
      <List>
        {navItems.map((item) => (
          <ListItem
            button
            key={item.label}
            onClick={() => onScrollToSection(item.section)}
          >
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <Box sx={{ p: 2 }}>
        <Button
          fullWidth
          variant="contained"
          color="primary"
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
        >
          Citas
        </Button>
      </Box>
    </Box>
  );

  return (
    <AppBar position="sticky" sx={{ bgcolor: "white", boxShadow: 1 }}>
      <Box sx={{ maxWidth: "1200px", margin: "0 auto", px: 2 }}>
        <Toolbar
          sx={{ display: "flex", justifyContent: "space-between", py: 1 }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Pets sx={{ fontSize: 40, color: "#1976d2" }} />
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: "#333",
                }}
              >
                Patitas Felices
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Cuidando a tus mascotas como familia
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                color="inherit"
                onClick={() => onScrollToSection(item.section)}
                sx={{ fontWeight: 500 }}
              >
                {item.label}
              </Button>
            ))}
            <Button
              variant="contained"
              color="primary"
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
            >
              Citas
            </Button>
          </Box>
        </Toolbar>
      </Box>

      <Drawer anchor="left" open={mobileMenuOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Header;
