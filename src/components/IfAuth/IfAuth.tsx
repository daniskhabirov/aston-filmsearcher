import { getUserId } from "../../app/reducers/selectors";
import { useAppSelector } from "../../hooks/reduxHooks";

type Children = {
  children: JSX.Element;
};

const IfAuth = ({ children }: Children) => {
  const userId = useAppSelector(getUserId);
  if (userId) {
    return children;
  }
  return null;
};

export default IfAuth;
