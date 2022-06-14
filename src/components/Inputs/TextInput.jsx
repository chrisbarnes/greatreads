import { useFormContext } from "react-hook-form";
import { InputError } from "./InputError";
import { InputLabel } from "./InputLabel";

export const TextInput = ({ id, label, isRequired }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <InputLabel id={id}>{label}</InputLabel>
      <input id={id} type="text" {...register(id, { required: isRequired })} />
      {errors && errors[id] && <InputError error={errors[id]} />}
    </div>
  );
};
