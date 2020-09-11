module.exports = {
  string: value => value,
  option: value => ({ value }),
  array: value => ([...value]),
}
