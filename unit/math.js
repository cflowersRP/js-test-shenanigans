function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function addWithCallback(a, b, cb) {
  const result = add(a, b);
  cb(result);
}

module.exports = {
  add,
  subtract,
  addWithCallback
};
