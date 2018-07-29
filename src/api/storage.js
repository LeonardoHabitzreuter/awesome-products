export const store = (key, data) => localStorage.setItem(key, JSON.stringify(data))

export const getByKey = key => JSON.parse(localStorage.getItem(key))
