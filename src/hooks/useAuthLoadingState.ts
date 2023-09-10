import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { useEffect, useState } from "react";

import {
  fetchFavoriteCards,
  fetchUserDetails,
  userLoggedIn,
} from "../app/reducers/userSlice";

import { useAppDispatch } from "./reduxHooks";

const useAuthLoadingState = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(userLoggedIn({ uid, email, displayName }));
        await dispatch(fetchUserDetails(uid));
        await dispatch(fetchFavoriteCards());
      }
      setIsLoading(false);
    });

    return unsubscribe;
  }, []);

  return isLoading;
};

export default useAuthLoadingState;
