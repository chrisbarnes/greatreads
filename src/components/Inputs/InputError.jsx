export const InputError = ({ error }) => {
  return (
    <span>
      {error.type === "required" ? "This field is required" : error.message}
    </span>
  );
};
