import React from "react";
import { AppBar, Toolbar, Container, CssBaseline } from "@mui/material";
import Menu from "../components/Menu";

export default function LMain({ children }) {
  return (
    <div>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Menu />
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        {children}
      </Container>
    </div>
  );
}
