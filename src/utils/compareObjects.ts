interface Props {
  obj1: { [key: string]: string };
  obj2: { [key: string]: string };
}

export const compareObjects = ({ obj1, obj2 }: Props): boolean => {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};
