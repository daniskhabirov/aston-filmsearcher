import React from "react";
import { TextInput, InputProps } from "@mantine/core";

type Props = {
  year: InputProps;
};

const YearInput = ({ year }: Props) => {
  return <TextInput type="number" placeholder="Release year" {...year} />;
};

export default YearInput;
