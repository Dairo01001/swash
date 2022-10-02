import { createTheme, ThemeProvider } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "./pages/Admin";
import Login from "./pages/Login";

const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
};

export default App;
