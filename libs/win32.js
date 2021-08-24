function absolute(path) {
  const re = /^(?:(?:[a-z]:\\)|\\)(((?![<>:"/\\|?*]).)+(?:(?<![ .])\\)?)*$/i;

  return re.test(path);
}

function relative(path) {
  const re =
    /^(?:(?:[a-z]:)|[a-z0-9]|\.{2}\\)(?:(?:(?:(?![<>:"/\\|?*]).)|(?:\.{2}))+(?:(?<![ .]{3})\\)?)*$/i;

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
