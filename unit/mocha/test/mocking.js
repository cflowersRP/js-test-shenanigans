const assert = require('assert');
const sinon = require('sinon');

const { addWithCallback } = require('../../math');

describe('addWithCallback', function() {
  it('should add two numbers and invoke the callback with the result', function() {
    const fakeFn = sinon.fake();
    addWithCallback(1, 3, fakeFn);

    assert.equal(fakeFn.called, true);
    assert.equal(fakeFn.calledWith(4), true);
  });
});
