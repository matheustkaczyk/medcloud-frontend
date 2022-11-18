import { Alert, Fade } from "@mui/material";

const AlertComponent = ({ error, message, showAlert }) => {
  return (
    <>
      {
        showAlert && (
          <Fade in={error}>
            <Alert severity={error === true ? 'error' : 'success'} sx={{ width: "fit-content", position: "fixed", top: "2%", right: "2%", zIndex: 99999 }}>
              {message}
            </Alert>
          </Fade>
        )
      }
    </>
  );
}

export default AlertComponent;
