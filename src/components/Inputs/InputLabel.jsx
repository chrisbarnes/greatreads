import "./InputLabel.scss";

export const InputLabel = ({ children, id }) => {
  return (
    <label className="form-label" htmlFor={id}>
      {children}
    </label>
  );
};
