import { useSearchParams } from "react-router-dom";

import { SearchFormValues } from "../components/SearchForm/SearchForm";

const useSearch = () => {
  const getInitialValues = () => {
    const [searchParams] = useSearchParams();

    const initialValues: SearchFormValues = {
      search: searchParams.get("search") || "",
      year: searchParams.get("year") || "",
      type: searchParams.get("type") || "",
    };

    return initialValues;
  };

  return { getInitialValues };
};

export default useSearch;
