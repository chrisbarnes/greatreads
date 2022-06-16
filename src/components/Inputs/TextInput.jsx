import { useFormContext } from "react-hook-form";
import { InputError } from "./InputError";
import { InputLabel } from "./InputLabel";
import "./Inputs.scss";

export const TextInput = ({ id, label, isRequired }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="form-input-wrapper">
      <InputLabel id={id}>{label}</InputLabel>
      <input
        className="form-input"
        id={id}
        type="text"
        {...register(id, { required: isRequired })}
      />
      {errors && errors[id] && <InputError error={errors[id]} />}
    </div>
  );
};
