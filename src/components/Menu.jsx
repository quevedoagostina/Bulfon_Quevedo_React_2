import React from "react";
import { Link } from "react-router-dom";
import { Button, AppBar, Toolbar, Typography } from "@mui/material";

export default function Menu() {
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
      </Toolbar>
    </AppBar>
  );
}
