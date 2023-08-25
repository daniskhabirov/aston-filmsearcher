type Entries = {
  [key: string]: string;
};

const transformData = (data: Entries) => {
  const entries = Object.entries(data);
  const transformedData = entries.map(([key, value]) => {
    return [key[0].toLowerCase() + key.slice(1), value];
  });
  const result = Object.fromEntries(transformedData);
  return result;
};

export default transformData;
