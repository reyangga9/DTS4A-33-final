import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/authentication_firebase";

const ProtectecComponent = ({ children }) => {
  const navigate = useNavigate();
  const [user, isLoading] = useAuthState(auth);

  useEffect(() => {
    if (!user) {
      return navigate("/formlogin");
    }
  }, [user, navigate, children]);
  if (isLoading) {
    return "";
  } else {
    return children;
  }
};

export default ProtectecComponent;
