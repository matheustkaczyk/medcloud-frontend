import { CssBaseline, Grid, Paper, Box, Typography, TextField, FormControlLabel, Button, Checkbox, Link } from "@mui/material";
import Logo from "../../assets/medcloud.svg";

const Login = () => {
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
            height: '100vh',
          }}
        />
        <Grid
          container
          xs={12}
          sm={8}
          md={6}
          component={Paper}
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
                Sign In
              </Typography>
              <Box
                component='form'
                sx={{ mt: 1, width: '80%' }}
              >
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
                  Sign In
                </Button>
                <Link
                  href="/signup"
                  variant="body2"
                  ml={1}
                >
                  Dont have an account? Sign Up
                </Link>
                <Link
                  href="#"
                  variant="body2"
                  ml={1}
                >
                  Forgot your password?
                </Link>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default Login;
