import { Alert } from "@mui/material";

const AlertComponent = ({ error, message }) => {
  return (
    <>
      {
        error && (
          <Alert severity="error" sx={{ width: "fit-content", position: "fixed", top: "0", right: "0", transition: "ease-in" }}>
            {message}
          </Alert>
        )
      }
    </>
  );
}

export default AlertComponent;
