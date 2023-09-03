import { useCallback } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router";

import { notifications } from "@mantine/notifications";

import { doc, setDoc } from "@firebase/firestore";

import { Action, ThunkDispatch } from "@reduxjs/toolkit";

import {
  fetchFirestoreData,
  userLoggedIn,
  userLoggedOut,
} from "../app/reducers/userSlice";
import { firestore } from "../utils/firebase";
import { RootState } from "../app/store";

export const thunkFetchFirestoreData = (
  dispatch: ThunkDispatch<RootState, string, Action>,
  userId: string,
) => {
  dispatch(fetchFirestoreData(userId));
};

interface Props {
  email: string;
  password: string;
}

const useAuth = () => {
  const auth = getAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signUp = useCallback(
    ({ email, password }: Props) => {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const { uid, email } = userCredential.user;
          dispatch(userLoggedIn({ uid, email }));
          setDoc(doc(firestore, "users", uid), {
            searchHistory: [],
            favoriteCardIds: [],
          });
          navigate("/");
        })
        .catch((error) => {
          notifications.show({
            title: "Error",
            color: "pink",
            message: error.message + " 🤥",
          });
        });
    },
    [auth, dispatch, navigate],
  );

  const login = useCallback(
    ({ email, password }: Props) => {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const { uid, email } = userCredential.user;
          dispatch(userLoggedIn({ uid, email }));
          thunkFetchFirestoreData(dispatch, uid);
          navigate("/");
        })
        .catch((error) => {
          notifications.show({
            title: "Error",
            color: "pink",
            message: error.message + " 🤥",
          });
        });
    },
    [auth, dispatch, navigate],
  );

  const logout = useCallback(() => {
    signOut(auth);
    dispatch(userLoggedOut());
  }, [auth, dispatch]);

  return { signUp, login, logout };
};

export default useAuth;
