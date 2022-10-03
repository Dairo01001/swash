import { Tab, Tabs } from "@mui/material";
import { useState } from "react";
import GroupsIcon from "@mui/icons-material/Groups";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

const Team = () => {
  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Tabs value={value} onChange={handleChange}>
        <Tab icon={<GroupsIcon />} label="Equipos" />
        <Tab icon={<AddCircleOutlineIcon />} label="Nuevo Equipo" />
        <Tab
          icon={<ArrowBackIcon />}
          LinkComponent={Link}
          to="/admin"
          label="Admin"
        />
      </Tabs>
    </>
  );
};

export default Team;
