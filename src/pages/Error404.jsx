import React from "react";
import { Link } from "react-router-dom";
import { Typography, Button } from "@mui/material";

export default function Error404() {
  return (
    <>
      <Typography variant="h4">Ups!. Página no encontrada...</Typography>
      <Button component={Link} to="/" color="primary">
        Home
      </Button>
    </>
  );
}
