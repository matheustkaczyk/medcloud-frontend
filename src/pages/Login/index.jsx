import { useState } from "react";

import { CssBaseline, Grid } from "@mui/material";

import SignIn from '../../components/SignIn';
import SignUp from "../../components/SignUp";

const Login = () => {
  const [signUp, setSignup] = useState(false);
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
          signUp ? <SignUp /> : <SignIn setSignUp={setSignup} />
        }
      </Grid>
    </>
  )
}

export default Login;
