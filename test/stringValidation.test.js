'use strict';
var expect = require('chai').expect;
const { isEmail, isPhoneNumber, getLinksFromText, removeSpecialCharacter } = require('../dist/index.js');



describe('string validation', () => {
  it('isEmail: should return true', () => {
    var result = isEmail('hello@gmail.com');
    expect(result).to.equal(true);
  })
  it('isEmail: should return false', () => {
    var result = isEmail('@.com');
    expect(result).to.equal(false);
  })

  it('isPhoneNumber: should return true', () => {
    var result = isPhoneNumber('01095273239');
    expect(result).to.equal(true);
  })
  it('isPhoneNumber: should return false', () => {
    var result = isPhoneNumber('0109527323911');
    expect(result).to.equal(false);
  })

  it('should return https://www.lipsum.com/', () => {
    var result = getLinksFromText('Lorem Ipsum is simply. dummy text of https://www.lipsum.com/ in the printing');
    expect(result).contains('https://www.lipsum.com/');
  })
  it('should return two links in array', () => {
    var result = getLinksFromText('Lorem Ipsum is simply. dummy text of https://www.lipsum.com/ in the printing and https://meet.google.com/');
    expect(result).to.eqls(['https://www.lipsum.com/', 'https://meet.google.com/']);
  })
  it('should return string without any special character', () => {
    var result = removeSpecialCharacter('Lorem ipsum? dolor sit, a rationem! Campum efficitur, , pulcherrimum; #sequimur teneam ullo!123');
    expect(result).to.equal('Lorem ipsum dolor sit a rationem Campum efficitur  pulcherrimum sequimur teneam ullo123');
  })

})