import "./link.css";
export const Link = (linkProps) => {
  const { id,name,href, labelLink, styleType ,type}=linkProps;
    return (
      <a
      {...(type &&{ type})}
      {...(id && {id})}
      {...(name && {name})}
        href={href}
        className={styleType}
      >
        {labelLink}
      </a>
    );
  }
export default Link ;