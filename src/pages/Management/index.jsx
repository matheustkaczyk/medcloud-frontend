import { useEffect, useState } from "react";
import { CssBaseline } from "@mui/material";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Management = () => {
  const [id, setId] = useState("");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");

    return navigate("/login");
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
        setId(response.data.id);
      }).catch(() => {
        handleLogout();
      });
    };

    validate();
  }, []);

  return (
    <>
      <CssBaseline />
      <Header handleLogout={handleLogout} />
    </>
  )
}

export default Management;
