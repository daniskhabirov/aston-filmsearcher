import React from "react";
import { Button } from "@mantine/core";

import { Link } from "react-router-dom";

const SignUpButton = () => {
  return (
    <Button component={Link} to="/signup" size="xs">
      SignUp
    </Button>
  );
};

export default SignUpButton;
