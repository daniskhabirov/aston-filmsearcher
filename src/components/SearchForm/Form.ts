import { useForm } from "@mantine/form";

import { searchValueValidate } from "../../utils/validate";

const defaultProps: props = {
  initialValues: {
    search: "",
    year: "",
    type: "",
  },
};

type props = {
  initialValues: {
    search: string;
    year: string;
    type: string;
  };
};

const Form = ({ initialValues }: props = defaultProps) => {
  return useForm({
    initialValues: initialValues,
    validate: {
      search: searchValueValidate,
    },
  });
};

export default Form;
