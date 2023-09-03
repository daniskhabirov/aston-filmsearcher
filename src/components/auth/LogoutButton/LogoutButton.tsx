import React from "react";
import { Button } from "@mantine/core";

import useAuth from "../../../hooks/useAuth";

const LogoutButton = () => {
  const { logout } = useAuth();

  return (
    <Button color="gray" onClick={logout} size="xs">
      Logout
    </Button>
  );
};

export default LogoutButton;
