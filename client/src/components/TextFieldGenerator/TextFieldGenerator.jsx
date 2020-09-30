import React from "react";
import CustomTextField from "../CustomTextField/CustomTextField.jsx";

const TextFieldGenerator = (props) => {
  return (
    <>
      {props.textFields.map((field) => (
        <CustomTextField
          field={field}
          className="center"
          onChange={(e) => onChange(e, field.name)}
          key={field.name}
        ></CustomTextField>
      ))}
    </>
  );
};

export default TextFieldGenerator;
