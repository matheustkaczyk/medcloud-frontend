import { Grid, Paper, Box, Typography, TextField, FormControlLabel, Button, Checkbox, Link } from "@mui/material";
import Logo from "../../assets/medcloud.svg";

const SignIn = ({ setSignUp, signInState, handleSignIn, hasError }) => {
  const { signInForms, setSignInForms } = signInState;

  return (
    <>
      <Grid
        item
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
          <Box
            sx={{
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
                onChange={(e) => setSignInForms({ ...signInForms, email: e.target.value })}
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
                onChange={(e) => setSignInForms({ ...signInForms, password: e.target.value })}
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
                onClick={(e) => handleSignIn(e)}
              >
                Sign In
              </Button>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Link
                  variant="body2"
                  ml={1}
                  onClick={() => setSignUp(true)}
                  sx={{ cursor: 'pointer', width: "fit-content" }}
                >
                  Don't have an account?
                </Link>
                <Link
                  href="#"
                  variant="body2"
                  ml={1}
                  sx={{ marginTop: '1vh', width: "fit-content" }}
                >
                  Forgot your password?
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
    </>
  )
}

export default SignIn;
