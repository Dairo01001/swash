import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Link } from "react-router-dom";

const data = [
  {
    plaque: "GJW-60D",
    start: "10:30 AM",
    end: "12:00 PM",
    price: "15000",
    state: "sale",
  },
  {
    plaque: "RXT-58R",
    start: "12:30 PM",
    end: "02:00 PM",
    price: "14000",
    state: "presale",
  },
  {
    plaque: "DER-60A",
    start: "12:00 PM",
    end: "01:30 PM",
    price: "18000",
    state: "sale",
  },
];

const BikeTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Placa</TableCell>
            <TableCell align="right">Inicio</TableCell>
            <TableCell align="right">Termina</TableCell>
            <TableCell align="right">Precio ($)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(({ plaque, start, end, price }) => {
            return (
              <TableRow key={plaque}>
                <TableCell>
                  <Link to={`/${plaque}`} style={{ textDecoration: "None" }}>
                    {plaque}
                  </Link>
                </TableCell>
                <TableCell align="right">{start}</TableCell>
                <TableCell align="right">{end}</TableCell>
                <TableCell align="right">{price} $</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BikeTable;
