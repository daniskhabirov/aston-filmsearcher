export const validateSearchValue = (value: string) =>
  value.length < 3 ? "Search must have at least 3 letters" : null;
