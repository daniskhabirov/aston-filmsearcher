import React, { useState } from "react";
import { Button, Group } from "@mantine/core";

import useAuth from "../../../hooks/useAuth";
import GoogleIcon from "../../GoogleIcon/GoogleIcon";

const LoginWithGoogleButton = () => {
  const { loginWithGoogle } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    loginWithGoogle().then(() => setIsLoading(false));
  };

  return (
    <Group grow mb="md" mt="md">
      <Button
        leftIcon={<GoogleIcon />}
        variant="default"
        radius="xl"
        onClick={handleClick}
        loading={isLoading}
      >
        Google
      </Button>
    </Group>
  );
};

export default LoginWithGoogleButton;
