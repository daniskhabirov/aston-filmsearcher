import { useSearchParams } from "react-router-dom";

import { SearchFormValues } from "../components/SearchForm/SearchForm";
import { compareObjects } from "../utils/compareObjects";

interface ValuesChangedProps {
  lastSearch?: SearchFormValues;
  currentSearch: SearchFormValues;
}

const useSearch = () => {
  const getInitialValues = () => {
    const [searchParams] = useSearchParams();

    const initialValues: SearchFormValues = {
      search: searchParams.get("search") || "",
      year: searchParams.get("year") || "",
      type: searchParams.get("type") || "",
      page: searchParams.get("page") || "",
    };

    return initialValues;
  };

  const checkValuesChanged = ({
    lastSearch,
    currentSearch,
  }: ValuesChangedProps) => {
    const isChanged = !compareObjects({
      obj1: { ...lastSearch },
      obj2: { ...currentSearch },
    });

    return isChanged;
  };

  return { getInitialValues, checkValuesChanged };
};

export default useSearch;
