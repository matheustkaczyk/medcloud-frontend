import { AppBar, CssBaseline, TextField, Toolbar, Typography, } from "@mui/material";
import { Box } from "@mui/system";
import logo from '../../assets/medcloud.svg';

const Management = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <Box
            component="img"
            sx={{
              width: "22%",
              padding: "1%"
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
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Management;
