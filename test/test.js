'use strict';

const { isTrue } = require('chai').assert

describe('test suite', () => {
  it('true should be true', () => {
    let toBeTrue = true
    isTrue(toBeTrue)
  })
})
