import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { userLoggedIn } from "../app/reducers/userSlice";

const useAuthLoadingState = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email } = user;
        dispatch(userLoggedIn({ uid, email }));
      }
      setIsLoading(false);
    });

    return unsubscribe;
  }, [dispatch]);

  return isLoading;
};

export default useAuthLoadingState;
