import "./Button.scss";

export const Button = ({ className, children, type = "submit" }) => {
  return (
    <button className={`button ${className}`} type={type}>
      {children}
    </button>
  );
};
