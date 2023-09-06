import React, { useState } from "react";
import { Button } from "@mantine/core";

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
    <Button
      leftIcon={<GoogleIcon />}
      variant="default"
      radius="xl"
      onClick={handleClick}
      loading={isLoading}
      fullWidth
      mb="md"
      mt="md"
    >
      Google
    </Button>
  );
};

export default LoginWithGoogleButton;
