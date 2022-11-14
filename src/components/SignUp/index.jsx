import { Grid, Box, Typography, TextField, Button } from "@mui/material";
import Logo from "../../assets/medcloud.svg";

const SignUp = ({ signUpState, handleSignUp }) => {
  const { signUpForms, setSignUpForms } = signUpState;

  return (
    <>
      <Grid
        item
        xs={12}
        sm={8}
        md={6}
      >
        <Box
          sx={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box sx={{
            backgroundColor: '#ffffff',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <img src={Logo} style={{ width: '18em', padding: '1%' }} />
            <Typography
              component='h1'
              variant='h5'
              style={{ marginTop: '1em' }}
            >
              Sign Up
            </Typography>
            <Box
              component='form'
              sx={{ mt: 1, width: '80%', mb: 1 }}
            >
              <TextField
                margin='normal'
                required
                fullWidth
                id='firstName'
                label='First name'
                name='firstName'
                autoComplete='First name'
                autoFocus
                onChange={(e) => setSignUpForms({ ...signUpForms, firstName: e.target.value })}
              />
              <TextField
                margin='normal'
                required
                fullWidth
                id='lastName'
                label='Last name'
                name='lastName'
                autoComplete='Last Name'
                autoFocus
                onChange={(e) => setSignUpForms({ ...signUpForms, lastName: e.target.value })}
              />
              <TextField
                margin='normal'
                required
                fullWidth
                id='birthDate'
                label='Birth date (DD/MM/YYYY)'
                name='birthDate'
                autoComplete='Birthdate'
                autoFocus
                onChange={(e) => setSignUpForms({ ...signUpForms, birthDate: e.target.value })}
              />
              <TextField
                margin='normal'
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
                autoFocus
                onChange={(e) => setSignUpForms({ ...signUpForms, email: e.target.value })}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setSignUpForms({ ...signUpForms, password: e.target.value })}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                onClick={(e) => handleSignUp(e)}
              >
                Sign Up
              </Button>
            </Box>
          </Box>
        </Box>
      </Grid>
    </>
  )
}

export default SignUp;
