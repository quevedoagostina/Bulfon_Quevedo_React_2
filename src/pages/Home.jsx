import React from "react";
import LMain from "../layouts/LMain";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <LMain>
      <Typography variant="h4">Bienvenido</Typography>
      <Typography variant="body1">
        Iniciaste sesión con éxito. Ingresa a "Tasks" para comenzar o a "Contact" para soporte.
      </Typography>
    </LMain>
  );
}
