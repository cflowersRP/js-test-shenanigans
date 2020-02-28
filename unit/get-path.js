const { basename } = require('path');

function getPath() {
  return basename(__dirname);
}

module.exports = {
  getPath,
};
