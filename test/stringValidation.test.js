'use strict';
var expect = require('chai').expect;
const { isEmail, isPhoneNumber, isUrl, getDomain, hasValidUrlProtocol } = require('../dist/index.js');



describe('string validation', () => {
  const urlStr = 'https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_regexp_g_2'

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

  it('isUrl: should return true', () => {
    var result = isUrl(urlStr);
    expect(result).to.equal(true);
  })

  it('getDomain: should return w3schools.com', () => {
    var result = getDomain(urlStr);
    expect(result).to.equal('w3schools.com');
  })
  it('hasValidUrlProtocol: should return true', () => {
    var result = hasValidUrlProtocol(urlStr);
    expect(result).to.equal(true);
  })



})

