import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { CssBaseline, Typography, Grid, Box } from "@mui/material";
import { Container } from "@mui/system";
import axios from "axios";

import Header from "../../components/Header";

const Management = () => {
  const [manager, setManager] = useState({});
  const [patientsData, setPatientsData] = useState([]);
  const [error, setError] = useState({ error: false, message: '' });
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
      }).catch((err) => {
        setError({ error: true, message: err.message });
      });
    };

    async function getPatientsData() {
      await axios.get("http://localhost:3000/patient", {
        headers: {
          Authorization: token,
        },
      }).then((response) => {
        setPatientsData(response.data);
      }).catch(() => {
        handleLogout();
      });
    }

    validate()
      .then(() => getPatientsData());
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
