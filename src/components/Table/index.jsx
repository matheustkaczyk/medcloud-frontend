import { useState } from "react";
import { Paper, TableContainer, TableHead, TableRow, TableBody, TableCell, Box, TextField, Button } from "@mui/material";
import Table from '@mui/material/Table';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ModalComponent from "../Modal";
import forceRefresh from "../../utils/forceRefresh";
import axios from "axios";

const TableComponent = ({ columns, data, handleDelete, modalStyle, setError, searchTerm }) => {
  const [openModal, setOpenModal] = useState(false);
  const [editedPatient, setEditedPatient] = useState({
    Firstname: "",
    Lastname: "",
    Address: ""
  });

  const handleOpenModal = () => setOpenModal(true);

  const handleCloseModal = () => setOpenModal(false);

  const handleEditPatient = async (id, name, last_name, address) => {
    try {
      const editing = await axios.put(`http://localhost:3000/patient/${id}`, {
        firstName: editedPatient.Firstname || name,
        lastName: editedPatient.Lastname || last_name,
        address: editedPatient.Address || address
      }, {
        headers: {
          authorization: localStorage.getItem("token")
        }
      })
        .then(() => {
          forceRefresh();
        });

      alert("Patient edited successfully");
      return editing;
    } catch (error) {
      setError({ error: true, message: error.response.data.message });
    }
  }

  return (
    <TableContainer component={Paper} sx={{ maxHeight: "65vh" }}>
      <Table>
        <TableHead>
          <TableRow>
            {
              columns.map((columnName, index) => (
                <TableCell key={(columnName + index)} align="center" sx={{ backgroundColor: "#8cbae8", color: "black", fontWeight: "550", borderRight: "solid white 1px" }}>
                  {columnName}
                </TableCell>
              ))
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {
            data.filter((row) => row.name.includes(searchTerm) || row.last_name.includes(searchTerm) || row.email.includes(searchTerm) || row.address.includes(searchTerm)).map((row) => (
              <TableRow key={row.id} hover>
                <TableCell align="center" sx={{ fontWeight: "bolder" }}>{row.id}</TableCell>
                <TableCell align="center">{`${row.name} ${row.last_name}`}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center">{row.address}</TableCell>
                <TableCell align="center">{row.createdAt}</TableCell>
                <TableCell align="center" sx={{ display: "flex", justifyContent: "space-around" }}>
                  <EditIcon onClick={() => handleOpenModal()} sx={{ cursor: "pointer", color: "orange" }} />
                  <DeleteIcon onClick={() => handleDelete(row.id)} sx={{ cursor: "pointer", color: "red" }} />
                </TableCell>
                <ModalComponent open={openModal} handleClose={handleCloseModal}>
                  <Box component="form" sx={modalStyle}>
                    <h1>Edit patient</h1>
                    <TextField
                      sx={{ marginBottom: "2vh" }}
                      label="Name"
                      variant="filled"
                      required
                      defaultValue={row.name}
                      onChange={(e) => setEditedPatient({ ...editedPatient, Firstname: e.target.value })}
                    />
                    <TextField
                      sx={{ marginBottom: "2vh" }}
                      label="Last name"
                      variant="filled"
                      required
                      defaultValue={row.last_name}
                      onChange={(e) => setEditedPatient({ ...editedPatient, Lastname: e.target.value })}
                    />
                    <TextField
                      sx={{ marginBottom: "2vh" }}
                      label="Address"
                      variant="filled"
                      required
                      defaultValue={row.address}
                      onChange={(e) => setEditedPatient({ ...editedPatient, Address: e.target.value })}
                    />
                    <Button
                      variant="contained"
                      color="success"
                      type="submit"
                      onClick={(e) => {
                        e.preventDefault();
                        handleEditPatient(row.id, row.name, row.last_name, row.address);
                      }}
                    >
                      Edit
                    </Button>
                  </Box>
                </ModalComponent>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableComponent;
