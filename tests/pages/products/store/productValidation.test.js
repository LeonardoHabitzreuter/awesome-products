import validate from '../../../../src/pages/products/store/validation'

describe('product validation', () => {
  const validProduct = { name: 'name', measurementUnit: 'Unit' }

  test('should return an error when the name contains numbers', () => {
    const errors = validate({ ...validProduct, name: 'name123' })
    expect(errors).not.toHaveLength(0)
  })

  test('should return an error when the measurement unit is null', () => {
    const errors = validate({ ...validProduct, measurementUnit: null })
    expect(errors).not.toHaveLength(0)
  })

  test('should return an error when the expiry date is below the current date', () => {
    const errors = validate({ ...validProduct, expiryDate: new Date(2018, 1, 1) })
    expect(errors).not.toHaveLength(0)
  })

  test('should return no errors when the data is valid', () => {
    const errors = validate(validProduct)
    expect(errors).toHaveLength(0)
  })
})
