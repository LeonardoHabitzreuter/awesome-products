import { store, getByKey } from './storage'
import { newId } from 'common'

const PRODUCTS_KEY = 'products'

export const get = () => getByKey(PRODUCTS_KEY) || []

export const getById = productId => get().find(product => product.id === productId)

export const create = product => {
  const products = get()
  store(PRODUCTS_KEY, [ ...products, { ...product, id: newId() } ])
}

export const update = editProduct => {
  const products = get()
  store(PRODUCTS_KEY, products.map(product => product.id === editProduct.id ? editProduct : product))
}

export const remove = productId => {
  const products = get()
  store(PRODUCTS_KEY, products.filter(product => product.id !== productId))
}
