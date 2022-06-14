import { useForm, FormProvider } from "react-hook-form";
import { Input } from "../Inputs/Input";

export const AddAuthorForm = () => {
  const methods = useForm({ mode: "onTouched" });
  const onSubmit = (data) => console.log(data);

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Input type="text" id="firstName" label="First Name" isRequired />
        <Input type="text" id="lastName" label="Last Name" isRequired />
        <Input type="text" id="company" label="Company" isRequired />
        <Input type="email" id="email" label="Email" isRequired />
        <Input type="text" id="jobTitle" label="Job Title" isRequired />
        <Input
          type="text"
          id="jobDescription"
          label="Job Description"
          isRequired
        />

        <button type="submit">submit</button>
      </form>
    </FormProvider>
  );
};
