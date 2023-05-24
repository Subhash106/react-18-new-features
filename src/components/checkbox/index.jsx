import { useState } from "react";

const Checkbox = ({ labelOn, labelOff }) => {
  const [checked, setChecked] = useState(false);

  const checkboxHandler = () => {
    setChecked((check) => !check);
  };

  return (
    <label>
      <input type="checkbox" checked={checked} onChange={checkboxHandler} />
      {checked ? labelOn : labelOff}
    </label>
  );
};

export default Checkbox;
