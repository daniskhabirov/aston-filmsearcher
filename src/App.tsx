import React, { useEffect, useState } from "react";

import { BrowserRouter } from "react-router-dom";

import { getAuth, onAuthStateChanged } from "@firebase/auth";

import { useDispatch } from "react-redux";

import { LoadingOverlay } from "@mantine/core";

import Header from "./components/Header/Header";
import Router from "./app/routing/router";

import { userLoggedIn } from "./app/reducers/userSlice";

const App = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

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

  if (isLoading) {
    return <LoadingOverlay visible={true} overlayBlur={2} />;
  }

  return (
    <BrowserRouter>
      <Header />
      <Router />
    </BrowserRouter>
  );
};

export default App;
