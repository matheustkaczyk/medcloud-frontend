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
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        {manager.name && `Welcome ${manager.name.split(" ")[0]}!`}
      </Typography>
      <Container sx={{ width: "90vw", height: "70vh", backgroundColor: "#2E2E2E", borderRadius: "2px", marginTop: "4vh" }}>

      </Container>
    </>
  )
}

export default Management;
