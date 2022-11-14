import { AppBar, Box, TextField, Toolbar } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import logo from "../../assets/medcloud.svg";

const Header = () => {
  return (
    <AppBar position="fixed">
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
        <TextField
          label="Search"
          variant="filled"
          margin="normal"
          sx={{
            width: "50%",
            marginLeft: "10%",
            borderRadius: "5px",
            backgroundColor: "#ffffff"
          }}
        />
        <LogoutIcon sx={{ marginLeft: "15%", cursor: "pointer" }} />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
