import React from "react";
import { TextInput } from "./TextInput";
import { EmailInput } from "./EmailInput";

export const Input = ({ type, ...rest }) => {
  switch (type) {
    case "text":
      return <TextInput {...rest} />;
    case "email":
      return <EmailInput {...rest} />;
    default:
      return null;
  }
};
