import { useCallback } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  getAdditionalUserInfo,
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
    async ({ email, password }: Props) => {
      await createUserWithEmailAndPassword(auth, email, password)
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
    async ({ email, password }: Props) => {
      await signInWithEmailAndPassword(auth, email, password)
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

  const loginWithGoogle = useCallback(() => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((result) => {
      const details = getAdditionalUserInfo(result);
      const isNewUser = details?.isNewUser;
      const { uid, email } = result.user;
      dispatch(userLoggedIn({ uid, email }));
      if (isNewUser) {
        setDoc(doc(firestore, "users", uid), {
          searchHistory: [],
        });
      }
      navigate("/");
    });
  }, [auth, dispatch, navigate]);

  const logout = useCallback(() => {
    signOut(auth);
    dispatch(userLoggedOut());
  }, [auth, dispatch]);

  return { signUp, login, loginWithGoogle, logout };
};

export default useAuth;
