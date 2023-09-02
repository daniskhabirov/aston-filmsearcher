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

import { useNavigate } from "react-router";

import useAuth from "../../hooks/useAuth";
import { emailValidator, passwordValidator } from "../../utils/validate";

const SignUpPage = () => {
  const { signUp } = useAuth();
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
    signUp({ email, password });
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
            onClick={() => navigate("/login")}
            size="xs"
          >
            {"Already have an account? Login"}
          </Anchor>
          <Button type="submit">SignUp</Button>
        </Group>
      </form>
    </Paper>
  );
};

export default SignUpPage;
