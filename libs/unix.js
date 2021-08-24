function absolute(path) {
  const re = /^(?!\/\/)(?:(?!\/[.\\/]+\/).)+(?<![\.])$/i;

  return re.test(path);
}

function relative(path) {
  const re = /^[^\\/]\.?\/?(?:\/?(?:\.{2}|.+)\/?)(?<!\/\.+\/?)$/i;

  return re.test(path);
}

function valid(path) {
  return absolute(path) || relative(path);
}

module.exports = {
  absolute: absolute,
  relative: relative,
  valid: valid,
};
