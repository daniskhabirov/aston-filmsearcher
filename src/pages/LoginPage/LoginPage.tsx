import React from "react";
import {
  Group,
  Paper,
  PasswordInput,
  Stack,
  TextInput,
  Button,
  Anchor,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { upperFirst, useToggle } from "@mantine/hooks";

import useAuth from "../../hooks/useAuth";
import { emailValidator, passwordValidator } from "../../utils/validate";

const LoginPage = () => {
  const { login } = useAuth();
  const [type, toggle] = useToggle(["login", "signUp"]);

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
    login({ email, password, type });
  };

  return (
    <Paper
      withBorder
      p="xl"
      sx={{ maxWidth: "500px", margin: "50px auto 0 auto" }}
    >
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
          />
        </Stack>
        <Group position="apart" mt="xl">
          <Anchor
            component="button"
            type="button"
            color="dimmed"
            onClick={() => toggle()}
            size="xs"
          >
            {type === "signUp"
              ? "Already have an account? Login"
              : "Don't have an account? Register"}
          </Anchor>
          <Button type="submit">{upperFirst(type)}</Button>
        </Group>
      </form>
    </Paper>
  );
};

export default LoginPage;
