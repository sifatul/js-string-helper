import {
  isEmail,
  isPhoneNumber,
  isUrl,
  hasValidUrlProtocol,
} from "./stringValidation";
const getLinksFromText = (text: string) => {
  const geturl = new RegExp(
    "(^|[ \t\r\n])((ftp|http|https|gopher|mailto|news|nntp|telnet|wais|file|prospero|aim|webcal):(([A-Za-z0-9$_.+!*(),;/?:@&~=-])|%[A-Fa-f0-9]{2}){2,}(#([a-zA-Z0-9][a-zA-Z0-9$_.+!*(),;/?:@&~=%-]*))?([A-Za-z0-9$_+!*();/?:~-]))",
    "g"
  );

  return text.match(geturl)?.map((item) => item.trim());
};

const removeSpecialCharacter = (str: string) => {
  return str.replace(/[^a-zA-Z ]/g, "");
};

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
const clean = removeSpecialCharacter;

export {
  toCameCase,
  toKebabCase,
  toPascalCase,
  toSnakeCase,
  toTitleCase,
} from "./caseStyle";

export {
  getLinksFromText,
  removeSpecialCharacter,
  getDomain,
  clean,
  isEmail,
  isPhoneNumber,
  isUrl,
  hasValidUrlProtocol
};
