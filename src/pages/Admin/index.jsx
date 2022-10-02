import { Box, Tab, Tabs } from "@mui/material";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { useState } from "react";
import AdminList from "../../components/AdminList";
import SelectBike from "../../components/SelectBike";
import BikeTable from "../../components/BikeTable";
import NewBike from "../../components/NewBike";

const Admin = () => {
  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Tabs value={value} onChange={handleChange}>
        <Tab icon={<TwoWheelerIcon />} label="Motos" />
        <Tab icon={<PersonAddAltIcon />} label="Nueva" />
        <Tab icon={<AdminPanelSettingsIcon />} label="Administrar" />
      </Tabs>
      {value === 0 ? (
        <Box>
          <SelectBike />
          <BikeTable />
        </Box>
      ) : value === 1 ? (
        <NewBike />
      ) : (
        <AdminList />
      )}
    </div>
  );
};

export default Admin;
