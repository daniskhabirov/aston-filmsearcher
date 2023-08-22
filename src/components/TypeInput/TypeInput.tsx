import React from "react";
import { InputProps, Select } from "@mantine/core";

type Props = {
  props: InputProps;
};

const TypeInput = ({ props }: Props) => {
  const types = ["movie", "series", "episode"];
  return <Select allowDeselect placeholder="Type" data={types} {...props} />;
};

export default TypeInput;
