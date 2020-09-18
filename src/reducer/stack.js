import produce from 'immer'
import slug from 'slugify'

import { CREATE, REMOVE } from './../action/stack'
import { ADD as ADD_LIB, REMOVE as REMOVE_LIB } from './../action/lib'

const defaultLib = { name: '', doc: '' }
const defaultStack = { name: '', type: '', libs: {} }
const slugify = value => slug(value, '_')

const stackReducer = (state = defaultStack, action) => {
  const { type, payload } = action

  return produce(state, draft => {
    switch (type) {
      case CREATE:
        const { name, type } = payload
        draft = { name, type, libs: [] }
        break
      case ADD_LIB:
        const { name, doc } = payload
        draft.libs[slugify(payload.name)] = { name, doc }
        break
      case REMOVE_LIB:
        delete draft.libs[slugify(payload.name)]
        break
      default:
        break
    }
  })
}

export const reducer = (state = {}, action) => {
  const { type, payload } = action

  return produce(state, draft => {
    switch (type) {
      case NEW:
        draft[slugify(payload.name)] = stackReducer(undefined, action)
        break
      case ADD_LIB:
      case REMOVE_LIB:
        draft[slugify(payload.current)] = stackReducer(draft[slugify(payload)], action)
        break
      case REMOVE:
        delete draft[slugify(payload.name)]
        break
      default:
        break
    }
  })
}
