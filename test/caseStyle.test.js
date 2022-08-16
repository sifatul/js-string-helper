'use strict';
var expect = require('chai').expect;
const { toTitleCase, toCameCase, toPascalCase, toKebabCase, toSnakeCase } = require('../dist/index.js');

describe('case change', () => {

  const textExample = "hello world"
  it('should return first character of each word in capital letter', () => {
    var result = toTitleCase(textExample);
    expect(result).to.equal('Hello World');
  })
  it('should return first letter of each appended word written with an uppercase letter, except first letter', () => {
    var result = toCameCase(textExample);
    expect(result).to.equal('helloWorld');
  })
  it('should return first letter of each appended word written with an uppercase letter.', () => {
    var result = toPascalCase(textExample);
    expect(result).to.equal('HelloWorld');
  })

  it('should replace space with -', () => {
    var result = toKebabCase(textExample);
    expect(result).to.equal('hello-world');
  })

  it('should replace space with _', () => {
    var result = toSnakeCase(textExample);
    expect(result).to.equal('hello_world');
  })


})