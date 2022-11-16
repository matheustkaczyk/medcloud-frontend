import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { CssBaseline, Typography, Grid, Box, TextField, Button } from "@mui/material";
import { Container } from "@mui/system";
import AddIcon from '@mui/icons-material/Add';
import axios from "axios";

import Header from "../../components/Header";
import TableComponent from '../../components/Table';
import ModalComponent from "../../components/Modal";

import forceRefresh from "../../utils/forceRefresh";

const Management = () => {
  const [manager, setManager] = useState({});
  const [patientsData, setPatientsData] = useState([]);
  const [newPatient, setNewPatient] = useState({
    Firstname: "",
    Lastname: "",
    Email: "",
    Address: ""
  });
  const [error, setError] = useState({ error: false, message: '' });
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const handleOpenCreatePatientModal = () => setOpenModal(true);

  const handleCloseCreatePatientModal = () => setOpenModal(false);

  const handleLogout = () => {
    localStorage.removeItem("token");

    return navigate("/login");
  }

  const handleCreatePatient = async () => {
    if (newPatient.Firstname !== "" && newPatient.Lastname !== "" && newPatient.Email !== "" && newPatient.Address !== "") {
      try {
        const creating = await axios.post('http://localhost:3000/patient', {
          firstName: newPatient.Firstname,
          lastName: newPatient.Lastname,
          email: newPatient.Email,
          address: newPatient.Address
        }, {
          headers: {
            Authorization: localStorage.getItem("token")
          }
        });

        alert("Patient created successfully");
        return creating;
      } catch (error) {
        setError({ error: true, message: error.response.data.message });
      }
    }
  }

  const handleDeletePatient = async (id) => {
    try {
      const deleting = await axios.delete(`http://localhost:3000/patient/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      });

      alert("Patient deleted successfully");
      forceRefresh();
      return deleting;
    } catch (error) {
      setError({ error: true, message: error.response.data.message });
    }
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
    "createdAt",
    "",
    ""
  ]

  const dataNames = ['First name', "Last name", "Email", "Address"];

  const modelStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: "fit-content",
    width: "90%",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
  };

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
        <Container sx={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", marginTop: "1vh" }} >
          <AddIcon onClick={handleOpenCreatePatientModal} sx={{ width: "3%", height: "auto", backgroundColor: "#166abd", borderRadius: "50%", cursor: "pointer" }} />
          <ModalComponent
            open={openModal}
            handleClose={handleCloseCreatePatientModal}
          >
            <Box component="form" sx={modelStyle}>
              <Typography variant="h5" sx={{ marginBottom: "2vh", textAlign: "center" }}>New patient</Typography>
              {
                dataNames.map((name, index) => {
                  return (
                    <TextField
                      key={index}
                      sx={{ marginBottom: "2vh" }}
                      label={name}
                      variant="filled"
                      required
                      onChange={(e) => setNewPatient({ ...newPatient, [name.replace(' ', '')]: e.target.value })}
                    />
                  )
                })
              }
              <Button
                variant="contained"
                color="success"
                onClick={() => handleCreatePatient()}
                type="submit"
              >
                Create
              </ Button>
            </Box>
          </ModalComponent>
        </Container>
        <Container sx={{ width: "100%", height: "100%", borderRadius: "2px", marginTop: "1vh" }}>
          {
            <TableComponent columns={columns} data={patientsData} handleDelete={handleDeletePatient} />
          }
        </Container>
      </main>
    </>
  )
}

export default Management;
