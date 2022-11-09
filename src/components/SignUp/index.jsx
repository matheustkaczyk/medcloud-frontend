import { Grid, Paper, Box, Typography, TextField, FormControlLabel, Button, Checkbox, Link } from "@mui/material";
import Logo from "../../assets/medcloud.svg";

const SignUp = ({ setSignUp }) => {
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
              sx={{ mt: 1, width: '80%' }}
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
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
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
