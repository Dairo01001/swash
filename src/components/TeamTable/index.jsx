import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const TeamTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Equipo</TableCell>
            <TableCell align="right">Hora inicio</TableCell>
            <TableCell align="right">Motos lavadas</TableCell>
            <TableCell align="right" />
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
  );
};

export default TeamTable;
