import { useFormContext } from "react-hook-form";
import { InputError } from "./InputError";
import { InputLabel } from "./InputLabel";

export const EmailInput = ({ id, label, isRequired }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <InputLabel id={id}>{label}</InputLabel>
      <input
        id={id}
        type="email"
        {...register(id, {
          required: isRequired,
          pattern: {
            value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
            message: "Please enter a valid email address",
          },
        })}
      />
      {errors && errors[id] && <InputError error={errors[id]} />}
    </div>
  );
};
