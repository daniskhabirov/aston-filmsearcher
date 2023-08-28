import React from "react";
import { Button } from "@mantine/core";

import { Link } from "react-router-dom";

import { getUserId } from "../../app/reducers/selectors";
import { useAppSelector } from "../../hooks/reduxHooks";
import useAuth from "../../hooks/useAuth";

const AuthButton = () => {
  const { logout } = useAuth();
  const userId = useAppSelector(getUserId);

  return (
    <div>
      {userId ? (
        <Button color="gray" onClick={logout} size="xs">
          Logout
        </Button>
      ) : (
        <Button component={Link} to="/login" size="xs">
          Login
        </Button>
      )}
    </div>
  );
};

export default AuthButton;
