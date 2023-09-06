import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { Action, ThunkDispatch } from "@reduxjs/toolkit";

import { fetchUserDetails, userLoggedIn } from "../app/reducers/userSlice";
import { RootState } from "../app/store";

const useAuthLoadingState = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const thunkDispatch = useDispatch<ThunkDispatch<RootState, string, Action>>();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email } = user;
        dispatch(userLoggedIn({ uid, email }));
        thunkDispatch(fetchUserDetails(uid));
      }
      setIsLoading(false);
    });

    return unsubscribe;
  }, [dispatch]);

  return isLoading;
};

export default useAuthLoadingState;
