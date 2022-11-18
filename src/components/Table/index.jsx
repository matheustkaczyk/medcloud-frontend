import { useState } from "react";
import { Paper, TableContainer, TableHead, TableRow, TableBody, TableCell, Box, TextField, Button, Typography } from "@mui/material";
import Table from '@mui/material/Table';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ModalComponent from "../Modal";

const TableComponent = ({ columns, data, handleDelete, handleEdit, modalStyle, setAlert, searchTerm, editedPatient, setEditedPatient }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);

  const handleCloseModal = () => setOpenModal(false);

  const handleEditInfo = (id, name, lastName, address) => {
    setEditedPatient({
      Id: id,
      Firstname: name,
      Lastname: lastName,
      Address: address
    });

    handleOpenModal();
  }

  return (
    <TableContainer component={Paper} sx={{ maxHeight: "65vh" }}>
      <Table>
        <TableHead sx={{ position: "sticky", top: 0 }}>
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
          <>
            {
              data.filter((row) => row.name.includes(searchTerm) || row.last_name.includes(searchTerm) || row.email.includes(searchTerm) || row.address.includes(searchTerm)).map((row) => (
                <TableRow key={row.id} hover>
                  <TableCell align="center" sx={{ fontWeight: "bolder" }}>{row.id}</TableCell>
                  <TableCell align="center">{`${row.name} ${row.last_name}`}</TableCell>
                  <TableCell align="center">{row.email}</TableCell>
                  <TableCell align="center">{row.address}</TableCell>
                  <TableCell align="center">{
                    `${row.createdAt.split('T')[0]} at ${row.createdAt.split('T')[1].split('.')[0]}`
                  }</TableCell>
                  <TableCell align="center" sx={{ display: "flex", justifyContent: "space-around" }}>
                    <EditIcon onClick={() => handleEditInfo(row.id, row.name, row.last_name, row.address)} sx={{ cursor: "pointer", color: "orange" }} />
                    <DeleteIcon onClick={() => handleDelete(row.id)} sx={{ cursor: "pointer", color: "red" }} />
                  </TableCell>
                </TableRow>
              ))
            }
            <ModalComponent open={openModal} handleClose={handleCloseModal}>
              <Box component="form" sx={modalStyle}>
                <Typography variant="h5" sx={{ marginBottom: "1rem" }}>Edit patient</Typography>
                <TextField
                  sx={{ marginBottom: "2vh" }}
                  label="Name"
                  variant="filled"
                  required
                  defaultValue={editedPatient.Firstname}
                  onChange={(e) => setEditedPatient({ ...editedPatient, Firstname: e.target.value })}
                />
                <TextField
                  sx={{ marginBottom: "2vh" }}
                  label="Last name"
                  variant="filled"
                  required
                  defaultValue={editedPatient.Lastname}
                  onChange={(e) => setEditedPatient({ ...editedPatient, Lastname: e.target.value })}
                />
                <TextField
                  sx={{ marginBottom: "2vh" }}
                  label="Address"
                  variant="filled"
                  required
                  defaultValue={editedPatient.Address}
                  onChange={(e) => setEditedPatient({ ...editedPatient, Address: e.target.value })}
                />
                <Button
                  variant="contained"
                  color="success"
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    handleEdit();
                  }}
                >
                  Edit
                </Button>
              </Box>
            </ModalComponent>
          </>
        </TableBody>
      </Table>
    </TableContainer >
  )
}

export default TableComponent;
