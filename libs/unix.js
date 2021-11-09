function absolute (path) {
  const re = /^\/[^\\/](?!\.{1,2}($|\/))((?!\/[./](\/|$))\/?.)*\/?(?<!\/\.{1,1})$/i

  return re.test(path)
}

function relative (path) {
  const re = /^.{1,2}\/(?:.{2}|\w)*$/i

  return re.test(path)
}

function valid (path) {
  return absolute(path) || relative(path)
}

module.exports = {
  absolute: absolute,
  relative: relative,
  valid: valid
}
