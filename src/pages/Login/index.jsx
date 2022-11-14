import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { CssBaseline, Grid } from "@mui/material";
import axios from 'axios';

import SignIn from '../../components/SignIn';
import SignUp from "../../components/SignUp";

const Login = () => {
  const [signUp, setSignup] = useState(false);
  const [error, setError] = useState({ error: false, message: '' });

  const [signInForms, setSignInForms] = useState({
    email: '',
    password: '',
  });

  const [signUpForms, setSignUpForms] = useState({
    firstName: '',
    lastName: '',
    birthDate: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    const birthDateValidationRegex = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]|(?:Jan|Mar|May|Jul|Aug|Oct|Dec)))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2]|(?:Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)(?:0?2|(?:Feb))\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9]|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep))|(?:1[0-2]|(?:Oct|Nov|Dec)))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

    if (birthDateValidationRegex.test(signUpForms.birthDate)) {
      if (signUpForms.firstName !== '' && signUpForms.lastName !== '' && signUpForms.birthDate !== '' && signUpForms.email !== '' && signUpForms.password !== '') {
        axios.post('http://localhost:3000/signup', signUpForms)
          .then(() => {
            alert('Account created successfully');
            setError({ error: false, message: '' });
            setSignup(false);

            return;
          })
          .catch((err) => {
            setError({ error: true, message: err.response.data.message });
            console.error(err);

            return;
          });
      } else {
        alert('Please fill all the fields');
      }
    } else {
      alert('Please enter a valid birth date');
    }
  }

  const handleSignIn = async (e) => {
    e.preventDefault();

    if (signInForms.email != '' || signInForms.password != '') {
      await axios.post('http://localhost:3000/signin', signInForms)
        .then((response) => {
          setError({ error: false, message: '' });
          localStorage.setItem('token', response.data.token);

          return navigate('/');
        })
        .catch((err) => {
          setError({ error: true, message: err.response.data.error });
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
          signUp ? <SignUp
            signUpState={{ signUpForms, setSignUpForms }}
            handleSignUp={handleSignUp}
          /> : <SignIn
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
