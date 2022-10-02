import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

const SelectBike = () => {
  const [stateBike, setStateBike] = useState("all");

  const handleChange = (e) => {
    setStateBike(e.target.value);
  };

  return (
    <Box sx={{
        marginTop: "15px"
    }}>
      <FormControl fullWidth>
        <InputLabel id="state-bike">Estado</InputLabel>
        <Select
          labelId="state-bike"
          value={stateBike}
          label="Todas"
          onChange={handleChange}
        >
          <MenuItem value={"all"}>Todas</MenuItem>
          <MenuItem value={"presale"}>Pre-Venta</MenuItem>
          <MenuItem value={"sale"}>Venta</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectBike;
