import React, { createContext, useContext, useState } from 'react';
import { Button, Container, Paper } from '@mui/material';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      <Container maxWidth="xs">
        <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
          <h2>{isLoggedIn ? 'Bienvenido' : 'Iniciar sesión'}</h2>
          <Button
            variant="contained"
            color="primary"
            onClick={isLoggedIn ? logout : login}
          >
            {isLoggedIn ? 'Cerrar sesión' : 'Iniciar sesión'}
          </Button>
        </Paper>
        {children}
      </Container>
    </AuthContext.Provider>
  );
}
