import { createTheme, ThemeProvider } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "./pages/Admin";
import Bike from "./pages/Bike";
import Employee from "./pages/Employee";
import Error from "./pages/Error";
import Login from "./pages/Login";
import Team from "./pages/Team";

const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/:id" element={<Bike />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/team" element={<Team />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
};

export default App;
