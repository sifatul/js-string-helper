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

| Method | output | Explanation
| ------------- | ------------- | ------------- |
| `isEmail`  | boolean  | check whether a string is email
| `getLinksFromText`  | array  | finds all url/links inside a string
| `toTitleCase`  | string  | capitalize first character of each word in a string
| `toCameCase`  | string  | capitalize first character of each word (except first word)
| `removeSpecialCharacter`  | string  | remove all special keys from a string
