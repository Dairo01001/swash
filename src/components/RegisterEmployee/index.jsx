import {
  Avatar,
  Box,
  Button,
  CssBaseline,
  TextField,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import SendIcon from "@mui/icons-material/Send";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import Swal from "sweetalert2";

const RegisterEmployee = () => {
  return (
    <Box
      sx={{
        marginTop: "8px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <AppRegistrationIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Registrar Empleado
      </Typography>
      <Box component="form" noValidate sx={{ mt: 1 }}>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            paddingTop: 2,
          }}
        >
          <TextField label="Nombre(s)" required />
          <TextField label="Apellido(s)" required />
        </Stack>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            paddingTop: 2,
          }}
        >
          <TextField label="Identificacion" required />
          <TextField label="Telefono" required />
        </Stack>
        <Stack
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            paddingTop: 2,
          }}
        >
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            onClick={() => {
              Swal.fire("Registro", "Registro Exitoso!", "success");
            }}
          >
            Registrar
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default RegisterEmployee;
