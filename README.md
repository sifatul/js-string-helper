# js-string-helper

Helper module for string to provide support for common functions related to string, except [javascript built-in objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String). It's open source and any one is welcome to add more functions.

# Installation
`npm install --save js-string-helper`

# Usage
```
import {trim, isEmail, getLinksFromText} from 'js-string-helper'

console.log(isEmail("hello@gmail.com")) // true

```
# Method
### Case Styles
| Method | output | Explanation
| ------------- | ------------- | ------------- | 
| toTitleCase  | string  | capitalize first character of each word in a string
| toCameCase  | string  | capitalize first character of each word (except first word)
| toPascalCase  | string  | capitalize first character of each word
| toKebabCase  | string  | replace space between words with hyphen ( - )
| toSnakeCase  | string  | replace space between words with underscore ( _ ) 

&nbsp;
### String Validation
| Method | output | Explanation
| ------------- | ------------- | ------------- |
| isEmail  | boolean  | check whether a string is email
| isPhoneNumber  | boolean  | check whether a string is phone number of length 10
| isUrl  | boolean  | check whether a string is an URL
| hasValidUrlProtocol  | boolean  | check whether a url has valid url protocol


&nbsp;
### Other 


| Method | output | Explanation
| ------------- | ------------- | ------------- |
| getLinksFromText  | array  | finds all url/links inside a string
| removeSpecialCharacter  | string  | remove all special keys from a string
| clean  | string  | remove all special keys from a string
| getDomain  | boolean  | check whether a string is an URL and get domain

 
  