const isUrl = (str: string) => {
  return /^(ftp|http|https):\/\/[^ "]+$/.test(str);
};

const hasValidUrlProtocol = (url: string) =>
  ["http://", "https://", "ftp://"].some(
    (protocol) => url.indexOf(protocol) >= 0
  );

const getDomain = (url: string) => {
  if (!isUrl(url)) throw new Error("Parameter is not a valid url!");
  let result;
  let match = url.match(
    /^(?:(https|ftp|http)?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n\?\=]+)/im
  );
  if (match) {
    result = match[2];
    match = result.match(/^[^\.]+\.(.+\..+)$/);
    if (match) {
      result = match[1];
    }
  }

  return result;
};
const removeQueryString = (url: string) => {
  if (!isUrl(url)) throw new Error("Parameter is not a valid url!");

  return url.replace(/(\?.*)|(#.*)/g, "");
};
const getLastPathname = (url: string) => {
  if (!isUrl(url)) throw new Error("Parameter is not a valid url!");
  const noQueryString = url.replace(/(\?.*)|(#.*)/g, "");
  if (!noQueryString) return "";

  return noQueryString
    .split("/")
    .filter((item) => item !== "")
    .pop();
};
export {
  isUrl,
  hasValidUrlProtocol,
  getDomain,
  removeQueryString,
  getLastPathname,
};
