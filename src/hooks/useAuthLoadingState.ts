import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { useState } from "react";

import { fetchUserDetails, userLoggedIn } from "../app/reducers/userSlice";

import { useAppDispatch } from "./reduxHooks";

const useAuthLoadingState = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useAppDispatch();

  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const { uid, email, displayName } = user;
      dispatch(userLoggedIn({ uid, email, displayName }));
      dispatch(fetchUserDetails(uid));
    }
    setIsLoading(false);
  });

  return isLoading;
};

export default useAuthLoadingState;
