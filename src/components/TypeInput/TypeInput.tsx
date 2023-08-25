import React from "react";
import { InputProps, Select } from "@mantine/core";

const types = ["movie", "series", "episode"];

interface Props {
  type: InputProps;
}

const TypeInput = ({ type }: Props) => {
  return <Select allowDeselect placeholder="Type" data={types} {...type} />;
};

export default TypeInput;
