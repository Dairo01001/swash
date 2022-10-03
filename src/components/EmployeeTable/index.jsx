import {
  Collapse,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import { Box } from "@mui/system";

const data = [
  {
    name: "Daniela",
    countBikes: 15.5,
    amound: 35000,
    history: [
      { date: "2022-09-07", amound: 35000, countBikes: 11 },
      { date: "2022-03-07", amound: 35000, countBikes: 11 },
    ],
  },
  {
    name: "Pedro",
    countBikes: 10.5,
    amound: 20000,
    history: [
      { date: "2022-09-07", amound: 35000, countBikes: 11 },
      { date: "2022-03-07", amound: 35000, countBikes: 11 },
    ],
  },
  {
    name: "Camilo",
    countBikes: 15,
    amound: 32000,
    history: [
      { date: "2022-09-07", amound: 35000, countBikes: 11 },
      { date: "2022-03-07", amound: 35000, countBikes: 11 },
    ],
  },
];

const Row = ({ name, countBikes, amound, history }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {name}
        </TableCell>
        <TableCell align="right">{countBikes}</TableCell>
        <TableCell align="right">{amound}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={3}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Historial
              </Typography>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Fecha</TableCell>
                    <TableCell>Motos</TableCell>
                    <TableCell align="right">Ganancias ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {history.map(({ date, amound, countBikes }) => {
                    return (
                      <TableRow key={date}>
                        <TableCell component="th" scope="row">
                          {date}
                        </TableCell>
                        <TableCell>{countBikes}</TableCell>
                        <TableCell align="right">{amound}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

const EmployeeTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Nombre</TableCell>
            <TableCell align="right">Motos(dia)</TableCell>
            <TableCell align="right">Total $</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((employee, index) => {
            return <Row key={index} {...employee} />;
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EmployeeTable;
