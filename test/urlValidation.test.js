'use strict';
var { expect } = require('chai');
const { isUrl, getDomain, hasValidUrlProtocol, removeQueryString, getLastPathname, getQueryString } = require('../dist/index.js');

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

  it('getQueryString: object with one key value', () => {
    var result = getQueryString(urlStr);
    // .to.deep.equalInAnyOrder(expectedResult);
    expect(result).to.deep.equal({ 'filename': "tryjsref_regexp_g_2" });
  })

  it('getQueryString: object with two items', () => {
    const urlStr = 'https://www.w3schools.com/jsref?param1=bilbo&param2=fido'

    var result = getQueryString(urlStr);
    expect(result).to.deep.equal({ param1: 'bilbo', param2: 'fido' });
  })

  it('getQueryString: object with two items', () => {
    const urlStr = 'https://www.w3schools.com/jsref'

    var result = getQueryString(urlStr);
    expect(result).to.deep.equal({});
  })



})

