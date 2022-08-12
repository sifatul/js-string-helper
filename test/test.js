'use strict';
var expect = require('chai').expect;
const mainLib = require('../dist/index.js');
const { getLinksFromText, removeSpecialCharacter } = mainLib



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
