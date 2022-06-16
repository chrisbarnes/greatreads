import axios from "axios";
import { useForm, FormProvider } from "react-hook-form";
import { useMutation } from "react-query";
import { Input } from "../Inputs/Input";

export const AddAuthorForm = () => {
  const methods = useForm({ mode: "onTouched" });
  const onFormSubmitSuccess = (data) => {
    methods.reset();
    console.log(data);
  };
  const { mutate: send, status } = useMutation(
    (newAuthor) => {
      return axios.post("/authors", newAuthor);
    },
    { onSuccess: onFormSubmitSuccess }
  );
  const onSubmit = (newAuthor) => {
    send(newAuthor);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
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

        <button type="submit">
          submit{status === "loading" ? " ..." : ""}
        </button>

        {status === "success" && <p>Success!</p>}
        {status === "error" && (
          <p>Sorry, there was an error creating a new author.</p>
        )}
      </form>
    </FormProvider>
  );
};
