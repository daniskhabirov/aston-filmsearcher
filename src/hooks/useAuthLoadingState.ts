import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { userLoggedIn } from "../app/reducers/userSlice";

import { thunkFetchFirestoreData } from "./useAuth";

const useAuthLoadingState = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email } = user;
        dispatch(userLoggedIn({ uid, email }));
        thunkFetchFirestoreData(dispatch, uid);
      }
      setIsLoading(false);
    });

    return unsubscribe;
  }, [dispatch]);

  return isLoading;
};

export default useAuthLoadingState;
