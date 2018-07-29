export default [{
  name: 'Unit',
  acronym: 'un',
  convert: value => Math.floor(value)
}, {
  name: 'Kilogram',
  acronym: 'kg',
  convert: value => Number.parseFloat(value).toFixed(3)
}, {
  name: 'Liter',
  acronym: 'lt',
  convert: value => Number.parseFloat(value).toFixed(3)
}]
