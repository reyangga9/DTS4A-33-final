import { Button, Typography } from "@mui/material";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { signOutFromApps, auth } from "./firebase/authentication_firebase";

function App() {
  const [user] = useAuthState(auth);

  const navigate = useNavigate();
  async function signOutHandler() {
    await signOutFromApps();
    navigate("/formLogin");
  }

  return (
    <>
      <Button variant="contained" onClick={signOutHandler}>
        sign out
      </Button>
      <h1>ini halaman beranda</h1>
      {/* Kita akan tampilkan email dari user di sini */}
      {user ? (
        <>
          <Typography variant="body1">
            Email - <strong>{user.email}</strong>
          </Typography>
          <Typography variant="body1">
            Uid - <strong>{user.uid}</strong>
          </Typography>
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default App;
