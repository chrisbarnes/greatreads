export const InputError = ({ error }) => {
  console.log(error);
  return (
    <span>
      {error.type === "required" ? "This field is required" : error.message}
    </span>
  );
};
