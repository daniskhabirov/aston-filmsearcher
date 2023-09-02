import React from "react";
import { Button } from "@mantine/core";

import { Link } from "react-router-dom";

const LoginButton = () => {
  return (
    <Button component={Link} to="/login" size="xs">
      Login
    </Button>
  );
};

export default LoginButton;
