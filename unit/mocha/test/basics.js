const assert = require('assert');

const { add, subtract } = require('../../math');

describe('add', function() {
  it('should add two numbers', function() {
      assert.equal(add(2, 3), 5);
  });
});

describe('subtract', function() {
  const tests = [
    {args: [3, 2], expected: 1},
    {args: [6, 2], expected: 4},
    {args: [1, 0], expected: 1}
  ];

  tests.forEach(function(test) {
    it(`correctly subtracts ${test.args[0]} - ${test.args[1]}`, function() {
      const res = subtract.apply(null, test.args);
      assert.equal(res, test.expected);
    });
  });
});
