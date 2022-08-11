 const isEmail = (email:string) => {
  const checkEmail = String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  if (checkEmail) return true
  return false
};
const getLinksFromText = (text:string) => {
  const geturl = new RegExp(
    "(^|[ \t\r\n])((ftp|http|https|gopher|mailto|news|nntp|telnet|wais|file|prospero|aim|webcal):(([A-Za-z0-9$_.+!*(),;/?:@&~=-])|%[A-Fa-f0-9]{2}){2,}(#([a-zA-Z0-9][a-zA-Z0-9$_.+!*(),;/?:@&~=%-]*))?([A-Za-z0-9$_+!*();/?:~-]))"
    , "g"
  );
  return text.match(geturl)?.map(item =>
    item.trim())
}
const toTitleCase = (str:string) =>{
  return str.replace(
    /\w\S*/g, (txt) =>{
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}

const removeSpecialCharacter = (str:string)=>{
  return str.replace(/[^a-zA-Z ]/g, "")
}

const toCameCase = (str:string)=>{
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
    console.log(word)
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '');
}


export { isEmail, getLinksFromText, toTitleCase, removeSpecialCharacter, toCameCase }