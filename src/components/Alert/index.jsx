import { Alert } from "@mui/material";

const AlertComponent = ({ error, message }) => {
  const [showAlert, setShowAlert] = useState(false);
  return (
    <>
      <Button onClick={() => setShowAlert(true)}>Show Alert</Button>
      {showAlert && (
        <Alert
          severity={error ? "error" : "success"}
          message={message}
          onClose={() => setShowAlert(false)}
        />
      )}
    </>
  );
}

export default AlertComponent;
