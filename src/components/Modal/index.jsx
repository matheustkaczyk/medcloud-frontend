import React from 'react';
import Modal from '@mui/material/Modal';

const ModalComponent = (props) => {
  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {
        props.children
      }
    </Modal >
  );
}

export default ModalComponent;
