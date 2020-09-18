export const CREATE = Symbol('@LIB/NEW')
export const createStack = (name, type) => ({ type: CREATE, payload: { name, type }})

export const EDIT = Symbol('@LIB/EDIT')

export const REMOVE = Symbol('@LIB/REMOVE')
export const remove = (name) => ({ type: REMOVE, payload: { name }})
