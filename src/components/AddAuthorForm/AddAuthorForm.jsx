import axios from "axios";
import { useRef } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useMutation } from "react-query";
import { Input } from "../Inputs/Input";
import { Button } from "../Buttons/Button";
import { Message } from "../Message/Message";
import "./AddAuthorForm.scss";

export const AddAuthorForm = () => {
  // This ref will be used to retrieve the form DOM element
  const formRef = useRef();

  // Set up the React Hook Form methods and set the validation mode to "onTouched"
  const methods = useForm({ mode: "onTouched" });

  // This handles what should happen AFTER we have a successful form submission
  const onFormSubmitSuccess = (data) => {
    // Serialize the form data using the urlsearchparams to help us format it properly
    const serializedFormData = new URLSearchParams(
      new FormData(formRef.current)
    ).toString();

    // Serialized data
    console.log(serializedFormData);

    // JSON data
    console.log(methods.getValues());

    // Reset the form so we can add another author if we want
    // Maybe set focus to the first input here for a better user experience?
    methods.reset();
  };

  // Set up the "mutation" here using React Query's useMutation hook
  // This abstracts things away from the UI like loading and error states
  const { mutate: send, status } = useMutation(
    (newAuthor) => {
      return axios.post("/authors", newAuthor);
    },
    { onSuccess: onFormSubmitSuccess }
  );

  // Handle the form's submit
  const onSubmit = (newAuthor) => {
    send(newAuthor);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        method="post"
        ref={formRef}
        noValidate
      >
        <section className="add-author-form--fields">
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
        </section>

        <Button className="form-cta" type="submit">
          submit{status === "loading" ? " ..." : ""}
        </Button>

        {status === "success" && <Message>Success!</Message>}
        {status === "error" && (
          <Message type="error">
            Sorry, there was an error creating a new author.
          </Message>
        )}
      </form>
    </FormProvider>
  );
};
