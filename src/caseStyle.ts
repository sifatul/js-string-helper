const toTitleCase = (str: string) => {
  return str.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};
const toCameCase = (str: string) => {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, "");
};
const toPascalCase = (str: string) => {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word) => {
      return word.toUpperCase();
    })
    .replace(/\s+/g, "");
};
const toKebabCase = (str: string) => {
  return str.replace(/\s+/g, "-");
};
const toSnakeCase = (str: string) => {
  return str.replace(/\s+/g, "_");
};

export { toTitleCase, toCameCase, toPascalCase, toKebabCase, toSnakeCase };
