import { CssBaseline, Grid, Paper, Box, Typography } from "@mui/material";
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
              height: 'auto',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img src={Logo} style={{ width: '18em' }} />
            <Box sx={{
              backgroundColor: '#ffffff',
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
              <Typography
                component='h1'
                variant='h4'
                style={{ marginTop: '1em' }}
              >
                Sign In
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default Login;
