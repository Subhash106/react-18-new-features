import { useHistory, useLocation } from "react-router-dom";
import { Redirect, Switch, Route } from "react-router-dom";
import { useAuthContext } from "./AuthContext";

const Login = () => {
  const history = useHistory();
  const location = useLocation();
  const { user, signin } = useAuthContext();

  const { from } = location.state || { from: { pathname: "/" } };

  const login = () => {
    signin(() => {
      history.replace(from);
    });
  };

  return (
    <>
      {!user && (
        <div>
          <p>You must signin to view the page at {from.pathname}</p>
          <button onClick={login}>Log in</button>
        </div>
      )}
      {user && <Redirect to={{ pathname: "/topics" }} />}
    </>
  );
};

export default Login;
