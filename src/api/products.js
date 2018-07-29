import { store, getByKey } from './storage'

const PRODUCTS_KEY = 'products'

export const create = product => {
  const products = get()
  store(PRODUCTS_KEY, [ ...products, product ])
}

export const getById = productId => {}

export const update = product => {

}

export const remove = productId => {

}

export const get = () => getByKey(PRODUCTS_KEY) || []
