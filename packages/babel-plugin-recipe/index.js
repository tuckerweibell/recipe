/* eslint-disable filenames/match-exported */
const imports = require('./features/imports');

module.exports = function plugin() {
  return {
    visitor: imports,
  };
};
