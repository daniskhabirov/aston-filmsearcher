import React from "react";
import { TextInput, TextInputProps } from "@mantine/core";

const YearInput = (props: TextInputProps) => {
  return <TextInput type="number" placeholder="Release year" {...props} />;
};

export default YearInput;
