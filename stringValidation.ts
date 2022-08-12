const isEmail = (email: string) => {
  const checkEmail = String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  if (checkEmail) return true;

  return false;
};

const isPhoneNumber = (str: string) => {
  const check = str.match(
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
  );

  return check != null;
};
const isUrl = (str: string) => {
  return /^(ftp|http|https):\/\/[^ "]+$/.test(str);
};

const hasValidUrlProtocol = (url: string) =>
  ["http://", "https://", "ftp://"].some(
    (protocol) => url.indexOf(protocol) >= 0
  );
export { isEmail, isPhoneNumber, isUrl, hasValidUrlProtocol };
