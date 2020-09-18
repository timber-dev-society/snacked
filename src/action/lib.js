export const ADD = Symbol('@LIB/ADD')
export const add = (name, doc) => ({ type: ADD, payload: { name, doc } })

export const REMOVE = Symbol('@LIB/REMOVE')
export const remove = (name) => ({ type: REMOVE, payload: { name } })
