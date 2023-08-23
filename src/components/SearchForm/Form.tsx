import { useForm } from "@mantine/form";

import { validateSearchValue } from "../../utils/validate";

type props = {
  initialValues: {
    search: string;
    year: string;
    type: string;
  };
};

const Form = ({ initialValues }: props) => {
  return useForm({
    initialValues: initialValues,
    validate: {
      search: validateSearchValue,
    },
  });
};

export default Form;
