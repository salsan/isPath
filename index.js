const win32Path = require("./libs/win32.js");
const unixPath = require("./libs/unix.js");

module.exports = function isPath(path) {
  return win32Path.valid(path) || unixPath.valid(path);
};

module.exports.relative = function relative(path) {
  return win32Path.relative(path) || unixPath.relative(path);
};

module.exports.absolute = function absolute(path) {
  return win32Path.absolute(path) || unixPath.absolute(path);
};

module.exports.win32 = function win32(path) {
  return win32Path.valid(path);
};

module.exports.win32.relative = function relative(path) {
  return win32Path.relative(path);
};

module.exports.win32.absolute = function absolute(path) {
  return win32Path.absolute(path);
};

module.exports.unix = function unix(path) {
  return unixPath.valid(path);
};

module.exports.unix.relative = function relative(path) {
  return unixPath.relative(path);
};

module.exports.unix.absolute = function absolute(path) {
  return unixPath.absolute(path);
};
