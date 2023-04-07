export type DataAttributeMap = Record<string, string | number | boolean>;

interface DataAttributeParams {
  data?: DataAttributeMap;
}

export default ({data}: DataAttributeParams) => {
  if (!data) return {};

  const dataKeys = Object.keys(data);
  const dataAttributes: DataAttributeMap = {};

  dataKeys.forEach(dataKey => {
    dataAttributes[`data-${dataKey}`] = data[dataKey];
  });

  return dataAttributes;
};
