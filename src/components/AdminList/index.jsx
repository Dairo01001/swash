import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import GroupsIcon from "@mui/icons-material/Groups";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AdminList = () => {
  const navigate = useNavigate();

  return (
    <List
      sx={{ width: "100%", bgcolor: "background.paper" }}
      component="nav"
    >
      <ListItemButton>
        <ListItemIcon>
          <SupervisorAccountIcon />
        </ListItemIcon>
        <ListItemText primary="Operarios" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <GroupsIcon />
        </ListItemIcon>
        <ListItemText primary="Grupos" />
      </ListItemButton>
      <ListItemButton
        onClick={() => {
          Swal.fire({
            title: "Salir!",
            text: "¿Seguro desea salir?",
            icon: "warning",
            showCancelButton: true,
          }).then((res) => {
            if (res.isConfirmed) {
              navigate("/");
            }
          });
        }}
      >
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary="Salir" />
      </ListItemButton>
    </List>
  );
};

export default AdminList;
