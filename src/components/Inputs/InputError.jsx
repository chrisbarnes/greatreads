import "./InputError.scss";

export const InputError = ({ error }) => {
  return (
    <span className="form-error">
      {error.type === "required" ? "This field is required" : error.message}
    </span>
  );
};
