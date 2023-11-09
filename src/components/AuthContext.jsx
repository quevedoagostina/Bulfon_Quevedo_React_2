import React, { createContext, useContext, useState } from 'react';
import { Button, Paper } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const theme = isDarkMode ? darkTheme : createTheme();

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, setIsDarkMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AuthContext.Provider>
  );
}
