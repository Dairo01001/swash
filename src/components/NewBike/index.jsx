import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import { useState } from "react";

const colors = ["#000000", "#000080", "#ff0000", "#ffff00"];
const brands = ["AKT", "Bajaj", "Pulsar", "Suzuki", "Honda", "Yamaha"];
const teams = ["Grupo 1", "Grupo 2", "Destroller"];

const NewBike = () => {
  const [service, setService] = useState("washed");
  const [info, setInfo] = useState({
    color: colors[0],
    brand: brands[0],
    team: teams[0],
  });

  const handleChange = (e) => {
    setService(e.target.value);
  };

  const handleChangeTeam = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  return (
    <Box
      sx={{
        marginTop: "8px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box component="form" noValidate sx={{ mt: 1 }}>
        <Stack>
          <TextField label="Placa" required />
        </Stack>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            paddingTop: 2,
          }}
        >
          <TextField
            label="Telefono"
            required
            sx={{ width: "60%", paddingRight: 3 }}
          />
          <FormControl sx={{ width: "40%" }}>
            <InputLabel id="service">Servicios</InputLabel>
            <Select
              labelId="service"
              value={service}
              label="Lavado"
              onChange={handleChange}
            >
              <MenuItem value={"washed"}>Lavado</MenuItem>
              <MenuItem value={"washedPolished"}>Lavado y Polichado</MenuItem>
            </Select>
          </FormControl>
        </Stack>
        <Stack direction="row" spacing={2} paddingTop={2}>
          <TextField label="Nombre" sx={{ width: "60%", paddingRight: 3 }} />
          <FormControl sx={{ width: "40%" }}>
            <InputLabel required htmlFor="price">
              Precio
            </InputLabel>
            <OutlinedInput
              type="number"
              id="price"
              label="Precio"
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
            />
          </FormControl>
        </Stack>
        <Stack
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            paddingTop: 2,
          }}
        >
          <Button variant="contained" endIcon={<LocalPrintshopIcon />}>
            Imprimir
          </Button>
        </Stack>
        <Box paddingTop={4}>
          <Stack direction="row" spacing={2}>
            <FormControl sx={{ minWidth: "30%" }}>
              <InputLabel id="color">Color</InputLabel>
              <Select
                labelId="color"
                name="color"
                label="Color"
                value={info.color}
                onChange={handleChangeTeam}
              >
                {colors.map((color) => {
                  return (
                    <MenuItem key={color} value={color}>
                      {<TwoWheelerIcon style={{ color }} />}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <FormControl sx={{ minWidth: "30%" }}>
              <InputLabel id="brand">Marca</InputLabel>
              <Select
                labelId="brand"
                name="brand"
                label="Marca"
                value={info.brand}
                onChange={handleChangeTeam}
              >
                {brands.map((brand) => {
                  return (
                    <MenuItem key={brand} value={brand}>
                      {brand}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <FormControl sx={{ width: "100%" }}>
              <InputLabel id="team">Grupo</InputLabel>
              <Select
                labelId="team"
                label="Grupo"
                name="team"
                value={info.team}
                onChange={handleChangeTeam}
              >
                {teams.map((team) => {
                  return (
                    <MenuItem key={team} value={team}>
                      {team}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Stack>
          <FormGroup
            sx={{
              width: "100%",
              paddingTop: 2,
              display: "flex",
              flexDirection: "row",
            }}
          >
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Empleado 1"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Empleado 1"
            />
          </FormGroup>
          <Stack paddingTop={2} width="100%">
            <TextareaAutosize
              minRows={4}
              maxRows={4}
              style={{ width: "100%" }}
              placeholder="Observaciones"
            ></TextareaAutosize>
          </Stack>
          <Stack
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              paddingTop: 2,
            }}
          >
            <Button variant="contained" endIcon={<PointOfSaleIcon />}>
              Pre-Venta
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default NewBike;
