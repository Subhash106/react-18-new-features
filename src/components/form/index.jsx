import { useState } from "react";
import { useRef } from "react";
import Input from "../input";
import styles from "./style.module.css";

const Form = ({ saveData }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    tncAccepted: false,
  });

  const { name, email, password, passwordConfirmation, tncAccepted } = formData;

  const inputRef1 = useRef(0);
  const inputRef2 = useRef(0);

  const inputChangeHandler = (e) => {
    let {
      target: { value, name },
    } = e;

    if (e.target.type === "checkbox") {
      value = e.target.checked;
    }

    setFormData({ ...formData, [name]: value });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
    saveData(formData);
  };

  return (
    <form onSubmit={formSubmitHandler} className={styles.form}>
      <div className={styles["form-group"]}>
        <label htmlFor="name">Name</label>
        <input
          ref={inputRef1}
          data-ref="inputRef"
          id="name"
          name="name"
          type="text"
          value={name}
          onChange={inputChangeHandler}
          placeholder="Enter your name"
        />
      </div>
      <div className={styles["form-group"]}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          ref={inputRef2}
          value={email}
          onChange={inputChangeHandler}
          placeholder="Enter your email"
        />
      </div>
      <div className={styles["form-group"]}>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          ref={inputRef2}
          value={password}
          onChange={inputChangeHandler}
          placeholder="Enter your password"
        />
      </div>
      <div className={styles["form-group"]}>
        <label htmlFor="passwordConfirmation">Password confirmation</label>
        <input
          id="passwordConfirmation"
          type="password"
          name="passwordConfirmation"
          ref={inputRef2}
          value={passwordConfirmation}
          onChange={inputChangeHandler}
          placeholder="Confirm password"
        />
      </div>
      <div>
        <input
          id="tncAccepted"
          type="checkbox"
          name="tncAccepted"
          ref={inputRef2}
          value={tncAccepted}
          onChange={inputChangeHandler}
        />
        <label htmlFor="tncAccepted">I agree to the terms and conditions</label>
      </div>
      <div className={styles["form-group"]}>
        <button>Sign up</button>
      </div>
    </form>
  );
};

export default Form;
