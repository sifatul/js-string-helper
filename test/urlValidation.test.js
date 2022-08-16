'use strict';
var expect = require('chai').expect;
const { isUrl, getDomain, hasValidUrlProtocol, removeQueryString, getLastPathname } = require('../dist/index.js');

describe('url validation', () => {
  const urlStr = 'https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_regexp_g_2'


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
  it('removeQueryString: should return only the url', () => {
    var result = removeQueryString(urlStr);
    expect(result).to.equal("https://www.w3schools.com/jsref/tryit.asp");
  })
  it('getLastPathname: should return only tryit.asp', () => {
    var result = getLastPathname(urlStr);
    expect(result).to.equal("tryit.asp");
  })



})

