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
import { auth, login } from "../firebase/authentication_firebase";

import { useAuthState } from "react-firebase-hooks/auth";

function FormLogin() {
  const navigate = useNavigate();
  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });

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
  // untuk login
  function loginHandler() {
    login(credential.email, credential.password);
  }
  const avatarStyle = { backgroundColor: "green" };

  useEffect(() => {
    // Loading screen
    console.log(user);
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
      <Grid sx={{ flexGrow: 3 }}>
        <Paper
          elevation={10}
          sx={{
            width: 320,
            height: "50vh",
            margin: "20px auto",
            padding: "30px",
          }}
        >
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockOpenIcon />
            </Avatar>
            <h2>Sign In</h2>
          </Grid>
          <TextField
            sx={{ my: 1 }}
            label="Email"
            placeholder="Enter Email"
            fullWidth
            required
            value={credential.email}
            onChange={emailHandler}
            variant="outlined"
          ></TextField>
          <TextField
            sx={{ my: 1 }}
            label="Password"
            placeholder="Enter password"
            type="password"
            fullWidth
            value={credential.password}
            onChange={passwordHandler}
            required
            variant="outlined"
          ></TextField>
          <Button
            sx={{ my: 1 }}
            type="submit"
            color="primary"
            variant="contained"
            fullWidth
            onClick={loginHandler}
          >
            Sign in
          </Button>
          <Typography sx={{ my: 1 }}>
            Do you have an account? <Link to="/formRegister">Sign Up</Link>
          </Typography>
        </Paper>
      </Grid>
    </>
  );
}

export default FormLogin;
