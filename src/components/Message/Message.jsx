import "./Message.scss";

export const Message = ({ type = "info", children }) => {
  return <div className={`message message--${type}`}>{children}</div>;
};
