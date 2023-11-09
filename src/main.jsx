import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import PrivateRoutes from './components/PrivateRoutes';
import TaskList from './pages/TaskList';
import Error404 from './pages/Error404';
import Login from './pages/Login';
import { AuthProvider } from './components/AuthContext';

// Crea tu tema personalizado
const theme = createTheme({
  palette: {
    mode: "light", // o "dark"
    // otras propiedades de la paleta
  },
  // otras propiedades del tema
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <PrivateRoutes component={Home} />,
  },
  {
    path: '/contact',
    element: <PrivateRoutes component={Contact} />,
  },
  {
    path: '/protected',
    element: <PrivateRoutes />,
  },
  {
    path: '/tasks',
    element: <PrivateRoutes component={TaskList} />,
  },
  {
    path: '*',
    element: <Error404 />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
