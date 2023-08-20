type Entries = {
  [key: string]: string;
};

const transformData = (data: Entries) => {
  const entries: [string, string][] = Object.entries(data);
  return entries.map(([key, value]) => {
    return [key[0].toLowerCase() + key.slice(1), value];
  });
};

export default transformData;
