import React from "react";
import "./input.css";
export const Input = (inputProps) => {
    const {required, type, id, name, onChange, placeholder, styleType,labelInput} = inputProps
    return (
        <input
          {...(type && {type})}
          {...(id && {id})}
          {...(name && {name})}
          {...(labelInput && {labelInput})}
          {...(onChange && {onChange})}
          {...(placeholder && {placeholder})}
          {...(required && {required})}
          className={styleType}
         //{...(styleType && {styleType})}
         
          
        />
    );
}
export default Input ; 
