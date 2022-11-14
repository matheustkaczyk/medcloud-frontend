import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { CssBaseline, Grid } from "@mui/material";
import axios from 'axios';

import SignIn from '../../components/SignIn';
import SignUp from "../../components/SignUp";

const Login = () => {
  const [signUp, setSignup] = useState(false);
  const [error, setError] = useState(false);
  const [signInForms, setSignInForms] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleSignUp = () => {

  }

  const handleSignIn = async (e) => {
    e.preventDefault();

    if (signInForms.email != '' || signInForms.password != '') {
      await axios.post('http://localhost:3000/signin', signInForms)
        .then((response) => {
          setError(false);
          localStorage.setItem('token', response.data.token);

          return navigate('/');
        })
        .catch(() => {
          setError(true);
        });
    } else {
      alert('All fields are required');
    }
  }

  return (
    <>
      <CssBaseline />
      <Grid container component='main' sx={{ height: '100vh' }}>
        <Grid
          item
          xs={false}
          sm={4}
          md={6}
          sx={{
            backgroundImage: 'url(./src/assets/bg-doctoring.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {
          signUp ? <SignUp /> : <SignIn
            setSignUp={setSignup}
            signInState={{ signInForms, setSignInForms }}
            handleSignIn={handleSignIn}
            hasError={error}
          />
        }
      </Grid>
    </>
  )
}

export default Login;
