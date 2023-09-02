import React, { useState } from "react";
import {
  Group,
  Paper,
  PasswordInput,
  Stack,
  TextInput,
  Button,
  Anchor,
  Text,
  Divider,
} from "@mantine/core";
import { useForm } from "@mantine/form";

import { useNavigate } from "react-router";

import useAuth from "../../hooks/useAuth";
import { emailValidator, passwordValidator } from "../../utils/validate";
import LoginWithGoogleButton from "../../components/auth/LoginWithGoogleButton/LoginWithGoogleButton";

const LoginPage = () => {
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: emailValidator,
      password: passwordValidator,
    },
  });

  const handleSubmit = () => {
    const { email, password } = form.values;
    setIsLoading(true);
    login({ email, password }).then(() => setIsLoading(false));
  };

  return (
    <Paper
      withBorder
      p="xl"
      sx={{ maxWidth: "500px", margin: "50px auto 0 auto" }}
    >
      <Text size="lg" weight={500}>
        Welcome, login with
      </Text>

      <LoginWithGoogleButton />

      <Divider label="Or continue with email" labelPosition="center" my="lg" />

      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack>
          <TextInput
            required
            label="Email"
            placeholder="hello@google.com"
            value={form.values.email}
            onChange={(event) =>
              form.setFieldValue("email", event.currentTarget.value)
            }
            error={form.errors.email}
            radius="md"
          />
          <PasswordInput
            required
            label="Password"
            placeholder="Your password"
            value={form.values.password}
            onChange={(event) =>
              form.setFieldValue("password", event.currentTarget.value)
            }
            error={form.errors.password}
            radius="md"
          />
        </Stack>
        <Group position="apart" mt="xl">
          <Anchor
            component="button"
            type="button"
            color="dimmed"
            onClick={() => navigate("/signup")}
            size="xs"
            disabled={isLoading}
          >
            {"Don't have an account? SignUp"}
          </Anchor>
          <Button type="submit" loading={isLoading} radius="md">
            Login
          </Button>
        </Group>
      </form>
    </Paper>
  );
};

export default LoginPage;
