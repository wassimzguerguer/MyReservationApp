import React from "react";
import { Button } from "../atom/button/button";
import { InputLabel } from "../molecule/inputLabel/inputLabel";
import { Link } from "../atom/link/link";
import "./form.css";

export const Form = ({ formProps, onSubmit }) => {
  const { buttonProps, inputLabelProps, linkProps } = formProps;

  const handleSubmit = (event) => {
    event.preventDefault(); 
    onSubmit(); 
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {inputLabelProps.map((inputLabelProp, index) => (
        <InputLabel key={index} inputLabelProps={inputLabelProp} />
      ))}
      <Link {...linkProps} />
      <Button {...buttonProps} type="submit" className="form-button" />
    </form>
  );
};

export default Form;
