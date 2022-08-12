'use strict';
var expect = require('chai').expect;
const { toTitleCase, toCameCase, toPascalCase, toKebabCase, toSnakeCase } = require('../dist/index.js');

describe('case change', () => {

  it('should return first character of each word in capital letter', () => {
    var result = toTitleCase('Lorem Ipsum is simply. dummy text in the printing');
    expect(result).to.equal('Lorem Ipsum Is Simply. Dummy Text In The Printing');
  })
  it('should return first letter of each appended word written with an uppercase letter, except first letter', () => {
    var result = toCameCase('Lorem ipsum? dolor sit');
    expect(result).to.equal('loremIpsum?DolorSit');
  })
  it('should return first letter of each appended word written with an uppercase letter.', () => {
    var result = toPascalCase('Lorem ipsum? dolor sit');
    expect(result).to.equal('LoremIpsum?DolorSit');
  })

  it('should replace space with -', () => {
    var result = toKebabCase('Lorem ipsum? dolor sit');
    expect(result).to.equal('Lorem-ipsum?-dolor-sit');
  })

  it('should replace space with _', () => {
    var result = toSnakeCase('Lorem ipsum? dolor sit');
    expect(result).to.equal('Lorem_ipsum?_dolor_sit');
  })


})