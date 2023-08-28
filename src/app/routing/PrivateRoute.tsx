import React from "react";

import { Navigate, Outlet } from "react-router";

import { useAppSelector } from "../../hooks/reduxHooks";
import { getUserId } from "../reducers/selectors";

const PrivateRoute = () => {
  const userId = useAppSelector(getUserId);
  if (userId) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;
