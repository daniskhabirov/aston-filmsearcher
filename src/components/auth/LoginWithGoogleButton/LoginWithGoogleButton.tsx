import React from "react";
import { Button, Group } from "@mantine/core";

import useAuth from "../../../hooks/useAuth";
import GoogleIcon from "../../GoogleIcon/GoogleIcon";

const LoginWithGoogleButton = () => {
  const { loginWithGoogle } = useAuth();

  return (
    <Group grow mb="md" mt="md">
      <Button
        leftIcon={<GoogleIcon />}
        variant="default"
        radius="xl"
        onClick={loginWithGoogle}
      >
        Google
      </Button>
    </Group>
  );
};

export default LoginWithGoogleButton;
