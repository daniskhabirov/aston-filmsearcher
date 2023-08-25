import React from "react";
import { TextInput, InputProps } from "@mantine/core";

interface Props {
  year: InputProps;
}

const YearInput = ({ year }: Props) => {
  return <TextInput type="number" placeholder="Release year" {...year} />;
};

export default YearInput;
