import React, { useState } from "react";
import LMain from "../layouts/LMain";
import { Typography, TextField, Button } from "@mui/material";
import { useAuth } from "../components/AuthContext";
import { Navigate } from "react-router-dom";

function LoginForm() {
  const { isLoggedIn, login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "a" && password === "a") {
      login();
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <LMain>
      <Typography variant="h4">Iniciar sesión</Typography>
      <TextField
        label="Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        fullWidth
      />
      <TextField
        label="Contraseña"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
      />
      {isLoggedIn ? <Navigate to="/" /> : null}
      <Button variant="contained" color="primary" onClick={handleLogin}>
        Iniciar sesión
      </Button>
    </LMain>
  );
}

export default LoginForm;


/*
// User Login info
const database = [
  {
    username: "a",
    password: "a"
  },
  {
    username: "user2",
    password: "pass2"
  }
];
*/