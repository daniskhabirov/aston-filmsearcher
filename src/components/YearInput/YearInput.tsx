import React from "react";
import { TextInput, InputProps } from "@mantine/core";

type Props = {
  props: InputProps;
};

const YearInput = ({ props }: Props) => {
  return <TextInput type="number" placeholder="Release year" {...props} />;
};

export default YearInput;
