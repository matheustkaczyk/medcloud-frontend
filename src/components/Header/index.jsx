import { AppBar, Box, TextField, Toolbar } from "@mui/material";

import LogoutIcon from '@mui/icons-material/Logout';
import logo from "../../assets/medcloud.svg";

const Header = ({ handleLogout }) => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Box
          component="img"
          sx={{
            width: "22%",
            padding: "1%",
            minWidth: "120px",
          }}
          alt="logo"
          src={logo}
        />
        <LogoutIcon
          sx={{ marginLeft: "15%", cursor: "pointer" }}
          onClick={() => handleLogout()}
        />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
