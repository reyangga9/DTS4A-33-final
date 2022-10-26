import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import { signOutFromApps } from "../firebase/authentication_firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/authentication_firebase";

export const Nav = () => {
  const navigate = useNavigate();

  async function signOutHandler() {
    await signOutFromApps();
    navigate("/formLogin");
  }
  const [user] = useAuthState(auth);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          p: 2,
          backgroundColor: "#eae0e0",
        }}
      >
        <Box></Box>
        <Box>
          <Typography variant="body1">
            Hello - <strong>{user.email}</strong>
          </Typography>
        </Box>
        <Button variant="contained" onClick={signOutHandler}>
          sign out
        </Button>
      </Box>
    </>
  );
};
