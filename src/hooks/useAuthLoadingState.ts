import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchUserDetails, userLoggedIn } from "../app/reducers/userSlice";
import { AsyncAppDispatch } from "../app/store";

const useAuthLoadingState = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const asyncDispatch = useDispatch<AsyncAppDispatch>();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(userLoggedIn({ uid, email, displayName }));
        asyncDispatch(fetchUserDetails(uid));
      }
      setIsLoading(false);
    });

    return unsubscribe;
  }, [dispatch]);

  return isLoading;
};

export default useAuthLoadingState;
