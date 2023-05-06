import classNames from "classnames";
import { useState } from "react";
import Button from "../buttons";
import styles from "./styles.module.css";
import { Link, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { logout } from "../../utils/auth";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isRedirect, setIsRedirect] = useState(false);

  const { search } = useLocation();
  const mode = new URLSearchParams(search).get("mode");

  const isLogin = mode === "signin";

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (username && password) {
      fetch(`http://localhost:3002/${isLogin ? "login" : "signup"}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: username, password }),
      })
        .then((res) => res.json())
        .then((data) => {
          const { message, error, token } = data;
          if (message) {
            throw new Error(data.message);
          }
          setError("");
          localStorage.setItem("token", token);
          // set the expiration duration 1hr
          const expirationDate = new Date();
          expirationDate.setHours(expirationDate.getHours() + 1);
          localStorage.setItem("expirationDate", expirationDate.toISOString());
          setIsRedirect(true);
        })
        .catch((error) => {
          console.log(error);
          setError("Something went wrong!");
        });
    }
  };

  if (isRedirect) {
    window.location.href = "/";
  }

  return (
    <div className={classNames(styles.login)}>
      <h1>{isLogin ? "Login" : "Create New User"}</h1>
      {error && <p className={classNames(styles.error)}>{error}</p>}
      <form onSubmit={formSubmitHandler}>
        <div className={classNames(styles.form__group)}>
          <label className={classNames(styles.form__label)} htmlFor="username">
            Username
          </label>
          <input
            className={classNames(styles.form__input)}
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className={classNames(styles.form__group)}>
          <label className={classNames(styles.form__label)} htmlFor="password">
            Password
          </label>
          <input
            className={classNames(styles.form__input)}
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={classNames(styles.form__actions)}>
          <Link to={`?mode=${isLogin ? "signup" : "signin"}`}>
            {isLogin ? "Create New User" : "Login"}
          </Link>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
