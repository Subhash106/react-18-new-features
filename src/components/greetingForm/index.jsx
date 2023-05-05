import { useState } from "react";
import useFormInput from "../useFormInput";

const GreetingForm = () => {
  const firstName = useFormInput("Subash");
  const lastName = useFormInput("Chandra");
  return (
    <>
      <input {...firstName} />
      <input {...lastName} />
      <p>{`Good morning ${firstName.value} ${lastName.value}`}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: "<p>This paragraph is set dangerously</p>",
        }}
      />
    </>
  );
};

export default GreetingForm;
