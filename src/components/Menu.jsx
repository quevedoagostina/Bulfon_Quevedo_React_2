// Menu
import React from "react";
import { Link } from "react-router-dom";
import { Button, AppBar, Toolbar, Typography, useTheme } from "@mui/material";
import { useAuth } from "../components/AuthContext";
import myLogo from "../assets/logo.png";

export default function Menu() {
  const { setIsDarkMode, isDarkMode } = useAuth();
  const theme = useTheme();

  return (
    <AppBar background position="static">
      <Toolbar>
        <img src={myLogo} alt="Logo" fontSize="16px" />
        <Button component={Link} to="/" color="inherit">
          Home
        </Button>
        <Button component={Link} to="/contact" color="inherit">
          Contact
        </Button>
        <Button component={Link} to="/tasks" color="inherit">
          Tasks
        </Button>
        <Button component={Link} to="/login" color="inherit">
          Login
        </Button>
        <Button
          color="inherit"
          onClick={() => setIsDarkMode((prevMode) => !prevMode)}
        >
          Modo {theme.palette.mode === 'dark' ? 'claro' : 'oscuro'}
        </Button>
      </Toolbar>
    </AppBar>
  );
}

