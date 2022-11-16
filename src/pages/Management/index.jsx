import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { CssBaseline, Typography, Grid, Box, TextField, Button } from "@mui/material";
import { Container } from "@mui/system";
import AddIcon from '@mui/icons-material/Add';
import axios from "axios";

import Header from "../../components/Header";
import TableComponent from '../../components/Table';
import ModalComponent from "../../components/Modal";

const Management = () => {
  const [manager, setManager] = useState({});
  const [patientsData, setPatientsData] = useState([]);
  const [error, setError] = useState({ error: false, message: '' });
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const handleOpenModal = () => setOpenModal(true);

  const handleCloseModal = () => setOpenModal(false);

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

  const columns = [
    "Id",
    "Name",
    "Email",
    "Address",
    "createdAt"
  ]

  return (
    <>
      <CssBaseline />
      <Header handleLogout={handleLogout} />
      <main>
        <Box sx={
          {
            display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center", padding: ".5%", borderBottom: "1px solid grey", backgroundColor: "#166abd", color: "white"
          }
        }>
          <Typography variant="h5">
            {manager.name && `Welcome ${manager.name.split(" ")[0]}!`}
          </Typography>
          <Typography variant="overline">
            Patient management
          </Typography>
        </Box>
        <Container container sx={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", marginTop: "1vh" }} >
          <AddIcon onClick={handleOpenModal} sx={{ width: "3%", height: "auto", backgroundColor: "#166abd", borderRadius: "50%", cursor: "pointer" }} />
          <ModalComponent
            open={openModal}
            handleClose={handleCloseModal}
          />
        </Container>
        <Container sx={{ width: "100%", height: "100%", borderRadius: "2px", marginTop: "1vh" }}>
          {
            <TableComponent columns={columns} />
          }
        </Container>
      </main>
    </>
  )
}

export default Management;
