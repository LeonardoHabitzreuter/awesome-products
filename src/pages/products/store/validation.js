import { curry, pipe } from 'ramda'

const validateName = curry((name, errors) => (
  /\d/.test(name)
    ? [ ...errors, 'The name can not contains numbers' ]
    : errors
))

const validateMeasurementUnit = curry((measurementUnit, errors) => (
  !measurementUnit
    ? [ ...errors, 'The measurement unit is required' ]
    : errors
))

export default product => pipe(
  validateName(product.name),
  validateMeasurementUnit(product.measurementUnit)
)([])
