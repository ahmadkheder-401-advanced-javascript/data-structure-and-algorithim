'use strict';

const multiBracketValidation = require('../challenges/multiBracketValidation/multi-bracket-validation');

describe(`multiBracketValidation(input)`, () => {

  it(`multiBracketValidation(input)() returns true if its' input's brackets are balanced` , () => {
    let test = multiBracketValidation('()[[Extra Characters]]');
    expect(test).toEqual(true);
  });

  it(`multiBracketValidation(input)() returns false if its' input's brackets are not balanced` , () => {
    let test = multiBracketValidation('[({}]');
    expect(test).toEqual(false);
  });

  it(`multiBracketValidation(input)() returns true if there are no brackets` , () => {
    let test = multiBracketValidation('hvgdadhkgvakdc');
    expect(test).toEqual(true);
  });

});
