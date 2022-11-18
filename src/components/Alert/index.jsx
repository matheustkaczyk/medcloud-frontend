import { Alert, Fade } from "@mui/material";

const AlertComponent = ({ error, message }) => {
  return (
    <>
      {
        error && (
          <Fade in={error}>
            <Alert severity="error" sx={{ width: "fit-content", position: "fixed", top: "2%", right: "2%" }}>
              {message}
            </Alert>
          </Fade>
        )
      }
    </>
  );
}

export default AlertComponent;
