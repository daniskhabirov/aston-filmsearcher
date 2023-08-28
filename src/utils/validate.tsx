export const emailValidator = (value: string) =>
  /^\S+@\S+$/.test(value) ? null : "Invalid email";

export const passwordValidator = (value: string) =>
  value.length < 6 ? "Password should include at least 6 characters" : null;

export const searchValueValidator = (value: string) =>
  value.length < 3 ? "Search must have at least 3 letters" : null;
