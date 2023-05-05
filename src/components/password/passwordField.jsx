import { useId } from "react";

const PasswordField = () => {
  const passwordHintId = useId();
  return (
    <div>
      <input type="password" aria-describedby={passwordHintId} />
      <p id={passwordHintId}>Password must atleat 18 charectors long</p>
    </div>
  );
};

export default PasswordField;
