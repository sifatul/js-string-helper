'use strict';
var { expect } = require('chai');
const { isUrl, getDomain, hasValidUrlProtocol, removeQueryString, getLastPathname, getQueryString, isImageUrl } = require('../dist/index.js');

describe('url validation', () => {
  const urlStr = 'https://example.com/img.jpg?param1=1234&param2=5678'
  it('isUrl: should return true', () => {
    var result = isUrl(urlStr);
    expect(result).to.equal(true);
  })

  it('getDomain: should return example.com', () => {
    var result = getDomain(urlStr);
    expect(result).to.equal('example.com');
  })
  it('hasValidUrlProtocol: should return true', () => {
    var result = hasValidUrlProtocol(urlStr);
    expect(result).to.equal(true);
  })
  it('removeQueryString: should return only the url', () => {
    var result = removeQueryString(urlStr);
    expect(result).to.equal("https://example.com/img.jpg");
  })
  it('getLastPathname: should return only tryit.asp', () => {
    var result = getLastPathname(urlStr);
    expect(result).to.equal("img.jpg");
  })

  it('getQueryString: object with two key value', () => {
    var result = getQueryString(urlStr);
    expect(result).to.deep.equal({ 'param1': "1234", 'param2': '5678' });
  })

  it('isImageUrl: returns true for an url', () => {
    var result = isImageUrl(urlStr);
    expect(result).to.deep.equal(true);
  })

})

