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

const validateExpiryDate = curry((expiryDate, errors) => (
  expiryDate && new Date(expiryDate) < Date.now()
    ? [ ...errors, 'A expired product can not be stored' ]
    : errors
))

export default product => pipe(
  validateName(product.name),
  validateMeasurementUnit(product.measurementUnit),
  validateExpiryDate(product.expiryDate)
)([])
