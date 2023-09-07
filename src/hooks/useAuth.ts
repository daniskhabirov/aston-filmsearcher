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

import { useNavigate } from "react-router";

import { notifications } from "@mantine/notifications";

import { doc, setDoc } from "@firebase/firestore";

import {
  fetchUserDetails,
  userLoggedIn,
  userLoggedOut,
} from "../app/reducers/userSlice";
import { db } from "../utils/firebase";
import { textReplace } from "../utils/textReplace";

import { useAppDispatch } from "./reduxHooks";

interface Props {
  email: string;
  password: string;
}

const useAuth = () => {
  const auth = getAuth();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const signUp = useCallback(
    async ({ email, password }: Props) => {
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const { uid, email, displayName } = userCredential.user;
          dispatch(userLoggedIn({ uid, email, displayName }));
          setDoc(doc(db, "users", uid), {
            searchHistory: [],
            favoriteCardIds: [],
          });
          navigate("/");
        })
        .catch((error) => {
          notifications.show({
            title: "Error",
            color: "pink",
            message: textReplace(error.message, "Firebase: Error", "") + " 🤥",
          });
        });
    },
    [auth, dispatch, navigate],
  );

  const login = useCallback(
    async ({ email, password }: Props) => {
      await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const { uid, email, displayName } = userCredential.user;
          dispatch(userLoggedIn({ uid, email, displayName }));
          dispatch(fetchUserDetails(uid));
          navigate("/");
        })
        .catch((error) => {
          notifications.show({
            title: "Error",
            color: "pink",
            message: textReplace(error.message, "Firebase: Error", "") + " 🤥",
          });
        });
    },
    [auth, dispatch, navigate],
  );

  const loginWithGoogle = useCallback(async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider).then((result) => {
      const additionalUserInfo = getAdditionalUserInfo(result);
      const isNewUser = additionalUserInfo?.isNewUser;
      const { uid, email, displayName } = result.user;
      dispatch(userLoggedIn({ uid, email, displayName }));
      if (isNewUser) {
        setDoc(doc(db, "users", uid), {
          searchHistory: [],
          favoriteCardIds: [],
        });
      } else {
        dispatch(fetchUserDetails(uid));
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
