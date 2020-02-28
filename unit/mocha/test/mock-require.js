const assert = require('assert');
const proxyquire = require('proxyquire');

const pathStub = {
  basename: function() {
    return 'yolo!';
  },
};

const { getPath } = proxyquire('../../get-path', { 'path': pathStub });

describe('getPath', function() {
  it('returns the basename path!', function() {
    assert.equal(getPath(), 'yolo!');
  });
});
