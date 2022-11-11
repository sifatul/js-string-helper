# js-string-helper

Helper module for string to provide support for common functions related to string, except [javascript built-in objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String). It's open source and any one is welcome to [contribute](https://github.com/sifatul/js-string-helper/blob/913b16a95360eeb9083040cb04c28b17fac2a9e9/CONTRIBUTING.md).

# Installation
`npm install --save js-string-helper`

# Usage
`import {trim, isEmail, getLinksFromText} from 'js-string-helper' `
# Method

### URL Validation
 
| Method | output | Explanation
| ------------- | ------------- | ------------- |
| isUrl  | boolean  | check whether a string is an URL
| getDomain  | string  | get domain name of the url
| hasValidUrlProtocol  | boolean  | check whether a url has valid url protocol
| removeQueryString  | boolean  | return url without query string
| getQueryString  | object  | return object with all the parameter name and parameter value
| getLastPathname  | boolean  | return the last pathname of the url

&nbsp; \
Example: 
```js
const exampleUrl = 'https://www.abc.com/jsref/tryit.asp?query=test'

isUrl(exampleUrl)  // true

getDomain(exampleUrl)  // abc.com

hasValidUrlProtocol(exampleUrl)  // true

removeQueryString(exampleUrl)  // https://www.abc.com/jsref/tryit.asp

getQueryString(exampleUrl)  // {query:test}

getLastPathname(exampleUrl)  // tryit.asp
``` 
&nbsp;
### String Validation
| Method | output | Explanation
| ------------- | ------------- | ------------- |
| isEmail  | boolean  | check whether a string is email
| isPhoneNumber  | boolean  | check whether a string is phone number of length 10
| getLinksFromText  | string  | extract url from a text
| removeSpecialCharacter  | string  | return text without any special character
| clean  | string  | same as removeSpecialCharacter
 

&nbsp; \
Example: 
```js
isEmail("hello@gmail.com")  // true

isPhoneNumber("01095273239")  // true 

getLinksFromText("dummy text of https://www.lipsum.com/ in the printing")  // https://www.lipsum.com/ 

removeSpecialCharacter("Campum efficitur, , pulcherrimum; #sequimur teneam ullo! ")  // Campum efficitur  pulcherrimum sequimur teneam ullo  asp

``` 
### Case Styles
| Method | output | Explanation
| ------------- | ------------- | ------------- | 
| toTitleCase  | string  | capitalize first character of each word in a string
| toCameCase  | string  | capitalize first character of each word (except first word)
| toPascalCase  | string  | capitalize first character of each word
| toKebabCase  | string  | replace space between words with hyphen ( - )
| toSnakeCase  | string  | replace space between words with underscore ( _ ) 

&nbsp; 
Example: 
```js
toTitleCase("hello world")  // Hello World

toCameCase("hello world")  // helloWorld

toPascalCase("hello world")  // HelloWorld

toKebabCase("hello world")  // hello-world

toSnakeCase("hello world")  // hello_world
``` 

