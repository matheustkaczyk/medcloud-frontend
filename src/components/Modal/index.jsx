import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';

const style = {
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

const ModalComponent = ({ open, handleClose }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            label="Name"
          />
          <TextField
            label="Email"
          />
          <TextField
            label="Description"
          />
          <TextField
            label="Address"
          />
          <Button
            variant="contained"
            color="success"
          >
            Create
          </ Button>
        </Box>
      </Modal>
    </div>
  );
}

export default ModalComponent;
