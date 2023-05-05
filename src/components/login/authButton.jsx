import { useHistory } from "react-router-dom";
import { useAuthContext } from "./AuthContext";

const AuthButton = () => {
  const history = useHistory();
  const { user, signout } = useAuthContext();

  return user ? (
    <>
      <p>Welcome! {user.fist}</p>{" "}
      <button
        onClick={() =>
          signout(() => {
            history.push("/");
          })
        }
      >
        Logout
      </button>
    </>
  ) : (
    <p>You are not logged in!</p>
  );
};

export default AuthButton;
