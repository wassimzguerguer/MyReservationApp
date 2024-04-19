import React from "react";
import Input from "../../atom/input/input";
import Label from "../../atom/label/label";

import "./inputLabel.css"; 

export const InputLabel = ({ inputLabelProps }) => {
  const { errorMessage , inputProps, labelProps } = inputLabelProps;

  return (
    <div className="form-groupe">
      <Label {...labelProps} className="form-label" />
      <Input {...inputProps} className="form-input" />
      {errorMessage && (
        <div className="InputMolecule-error">{errorMessage}</div>
      )}
    </div>
  );
};
export default InputLabel ; 