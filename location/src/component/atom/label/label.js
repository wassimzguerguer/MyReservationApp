import React from 'react';
import './label.css'; 

export const Label = ({ labelProps }) => {
  const{id,label, styleType}=labelProps|| {};
  return (
    <label
    id={id}
     className={styleType}
>
        {label}
    </label>
  );
};
export default Label ;
