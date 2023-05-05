import { Route, Redirect } from "react-router-dom";
import { useAuthContext } from "../login/AuthContext";

const PrivateRoute = ({ children, ...rest }) => {
  let { user } = useAuthContext();
  console.log("rest", rest);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        )
      }
    />
  );
};

export default PrivateRoute;
