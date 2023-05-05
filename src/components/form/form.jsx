import Button from "../buttons";
import withHandlers from "../hocs/withHandlers";
import Title from "../title";
import styles from "./style.module.css";
import TomatoButton from "../buttons/tomato";

const Form = ({ firstName, changeHandler }) => {
  const saveHandler = () => {
    console.log("save handler called");
  };
  return (
    <>
      <Title>My form</Title>
      <input
        className={styles["text-input"]}
        name="firstName"
        value={firstName}
        onChange={changeHandler}
      />
      <Button onClick={saveHandler} primary>
        Save
      </Button>
      <Button>Cancel</Button>
      <TomatoButton>Tomato</TomatoButton>
    </>
  );
};

export default withHandlers(Form);
