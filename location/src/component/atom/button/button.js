import "./button.css";

export const Button = (buttonProps) => {
  const { id,name,onClick, labelButton, styleType ,type}=buttonProps;
  return (
    <button
    {...(type &&{ type})}
    {...(id && {id})}
    {...(name && {name})}
      onClick={onClick}
      className={`button ${styleType}`}
    >
      {labelButton}
    </button>
  );
};
export default Button;