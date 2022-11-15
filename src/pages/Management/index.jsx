import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { CssBaseline, Typography, Grid, Box } from "@mui/material";
import { Container } from "@mui/system";
import axios from "axios";

import Header from "../../components/Header";

const Management = () => {
  const [manager, setManager] = useState({});
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");

    return navigate("/login");
  }

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      return handleLogout();
    }

    async function validate() {
      await axios.post("http://localhost:3000/validate", {}, {
        headers: {
          Authorization: token,
        },
      }).then((response) => {
        setManager(response.data.user);
      }).catch(() => {
        handleLogout();
      });
    };

    validate();
  }, []);

  return (
    <>
      <CssBaseline />
      <Header handleLogout={handleLogout} />
      <Box sx={
        {
          display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center", padding: ".5%", borderBottom: "1px solid grey", backgroundColor: "#D1A319"
        }
      }>
        <Typography variant="h5">
          {manager.name && `Welcome ${manager.name.split(" ")[0]}!`}
        </Typography>
        <Typography variant="overline">
          Patient management
        </Typography>
      </Box>
      <Box sx={{ width: "100vw", height: "100%", backgroundColor: "#2E2E2E", borderRadius: "2px" }}>

      </Box>
    </>
  )
}

export default Management;
