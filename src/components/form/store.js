const internals = {}

export const useStore = () => {
  const state = {}
  internals.validators = []

  const setState = (name, value, isValid=true) => {
    Object.assign(state, {[name]: { value, isValid }})
  }
  

  return [ state, setState ]
}

useStore.addValidator = (input, validator) => (internals.validators.push({ key: input, validate: validator }))
