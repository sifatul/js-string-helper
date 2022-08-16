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

const clean = removeSpecialCharacter;

export {
  isEmail,
  isPhoneNumber,
  getLinksFromText,
  removeSpecialCharacter,
  clean,
};
