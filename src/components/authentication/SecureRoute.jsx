import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { useAuthContext } from "./AuthContext";

const SecureRoute = ({ children }) => {
  const { token } = useAuthContext();

  if (token) {
    return children;
  }

  return <Redirect to="/login?mode=signin" />;
};

export default SecureRoute;
