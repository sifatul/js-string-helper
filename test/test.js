'use strict';
var expect = require('chai').expect;
var { isEmail, getLinksFromText, toTitleCase, removeSpecialCharacter, toCameCase } = require('../dist/index.js');

describe('string validation', () => {
  it('should return true', () => {
    var result = isEmail('hello@gmail.com');
    expect(result).to.equal(true);
  })
  it('should return false', () => {
    var result = isEmail('@.com');
    expect(result).to.equal(false);
  })

})

describe('data extraction', () => {

  it('should return https://www.lipsum.com/', () => {
    var result = getLinksFromText('Lorem Ipsum is simply. dummy text of https://www.lipsum.com/ in the printing');
    expect(result).contains('https://www.lipsum.com/');
  })
  it('should return two links in array', () => {
    var result = getLinksFromText('Lorem Ipsum is simply. dummy text of https://www.lipsum.com/ in the printing and https://meet.google.com/');
    expect(result).to.eqls(['https://www.lipsum.com/', 'https://meet.google.com/']);
  })
  it('should return string without any special character', () => {
    var result = removeSpecialCharacter('Lorem ipsum? dolor sit, a rationem! Campum efficitur, , pulcherrimum; #sequimur teneam ullo! ');
    expect(result).to.equal('Lorem ipsum dolor sit a rationem Campum efficitur  pulcherrimum sequimur teneam ullo ');
  })
})
describe('case change', () => {

  it('should return first character of each word in capital letter', () => {
    var result = toTitleCase('Lorem Ipsum is simply. dummy text in the printing');
    expect(result).to.equal('Lorem Ipsum Is Simply. Dummy Text In The Printing');
  })
  it('should return string without any special character', () => {
    var result = toCameCase('Lorem ipsum? dolor sit');
    expect(result).to.equal('Lorem ipsum dolor sit');
  })


})