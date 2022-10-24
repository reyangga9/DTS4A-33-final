import {
  Avatar,
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { Link, useNavigate } from "react-router-dom";
import { auth, register } from "../firebase/authentication_firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function FormRegister() {
  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [user, isLoading, error] = useAuthState(auth);

  function emailHandler(e) {
    return setCredential({
      ...credential,
      email: e.target.value,
    });
  }

  function passwordHandler(event) {
    return setCredential({
      ...credential,
      password: event.target.value,
    });
  }

  function registerHandler() {
    register(credential.email, credential.password);
  }

  const avatarStyle = { backgroundColor: "green" };
  useEffect(() => {
    // Loading screen
    if (isLoading) {
      //
      return;
    }
    //
    if (user) {
      return navigate("/");
    }
    if (error) {
      console.log(error);
    }
  }, [user, isLoading, navigate, error]);
  return (
    <>
      <Grid container>
        <Paper
          elevation={10}
          sx={{
            maxWidth: 320,
            height: "60vh",
            margin: "20px auto",
            padding: "30px",
          }}
        >
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockOpenIcon />
            </Avatar>
            <h2>Sign Up</h2>
          </Grid>

          {/* <TextField
            sx={{ my: 1 }}
            label="Name"
            placeholder="Enter Your Name"
            fullWidth
            required
            variant="outlined"
          ></TextField> */}

          <TextField
            sx={{ my: 1 }}
            label="Email"
            placeholder="Enter Your Email"
            fullWidth
            required
            variant="outlined"
            type="email"
            value={credential.email}
            onChange={emailHandler}
          ></TextField>

          <TextField
            sx={{ my: 1 }}
            label="Password"
            placeholder="Enter Your Password"
            type="password"
            fullWidth
            required
            value={credential.password}
            onChange={passwordHandler}
            variant="outlined"
          ></TextField>
          <Button
            sx={{ my: 1 }}
            type="submit"
            color="primary"
            variant="contained"
            fullWidth
            onClick={registerHandler}
          >
            Sign up
          </Button>
          <Typography sx={{ my: 1 }}>
            Do you have an account? <Link to="/formLogin">Sign in</Link>
          </Typography>
        </Paper>
      </Grid>
    </>
  );
}

export default FormRegister;
