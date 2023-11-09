import React from "react";
import { Link } from "react-router-dom";
import { Button, AppBar, Toolbar, Typography } from "@mui/material";
import { useAuth } from "../components/AuthContext";

export default function Menu() {
  const { setIsDarkMode, isDarkMode } = useAuth(); // Agregado isDarkMode

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">TO-DO</Typography>
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
          Modo {isDarkMode ? 'luz' : 'oscuro'}
        </Button>
      </Toolbar>
    </AppBar>
  );
}
