import { useCallback } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  getAdditionalUserInfo,
  signOut,
} from "firebase/auth";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router";

import { notifications } from "@mantine/notifications";

import { doc, setDoc } from "@firebase/firestore";

import { userLoggedIn, userLoggedOut } from "../app/reducers/userSlice";
import { firestore } from "../utils/firebase";

interface Props {
  email: string;
  password: string;
  type: string;
}

const useAuth = () => {
  const auth = getAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = useCallback(
    ({ email, password, type }: Props) => {
      let userPromise;
      if (type === "login") {
        userPromise = signInWithEmailAndPassword(auth, email, password);
      } else {
        userPromise = createUserWithEmailAndPassword(auth, email, password);
      }
      userPromise
        .then((userCredential) => {
          const details = getAdditionalUserInfo(userCredential);
          const isNewUser = details?.isNewUser;
          const { uid, email } = userCredential.user;
          dispatch(userLoggedIn({ uid, email }));
          if (isNewUser) {
            setDoc(doc(firestore, "users", uid), {
              searchHistory: [],
            });
          }
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

  return { login, logout };
};

export default useAuth;
