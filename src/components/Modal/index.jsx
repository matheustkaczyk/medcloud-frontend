import React from 'react';
import Modal from '@mui/material/Modal';

const ModalComponent = (props) => {
  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
    >
      {
        props.children
      }
    </Modal >
  );
}

export default ModalComponent;
