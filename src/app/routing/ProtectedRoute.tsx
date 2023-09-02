import React from "react";

import { Navigate, Outlet } from "react-router";

import { useAppSelector } from "../../hooks/reduxHooks";
import { getUserId } from "../reducers/selectors";

const ProtectedRoute = () => {
  const userId = useAppSelector(getUserId);
  if (userId) {
    return <Outlet />;
  } else {
    return <Navigate to="/signup" />;
  }
};

export default ProtectedRoute;
