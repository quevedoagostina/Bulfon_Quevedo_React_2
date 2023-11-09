import React, { useState } from "react";
import LMain from "../layouts/LMain";
import { Typography, TextField, Button, Box } from "@mui/material";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica para enviar el formulario, como enviar una solicitud a un servidor o realizar otras acciones necesarias.
    console.log("Formulario enviado:", formData);
  };

  return (
    <LMain>
      <Typography variant="h4">Página de Contacto</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Nombre"
          variant="outlined"
          name="name"
          value={formData.name}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Correo Electrónico"
          variant="outlined"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Mensaje"
          variant="outlined"
          multiline
          rows={4}
          name="message"
          value={formData.message}
          onChange={handleChange}
          margin="normal"
        />
        <Box mt={2}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
          >
            Enviar Mensaje
          </Button>
        </Box>
      </form>
    </LMain>
  );
}
