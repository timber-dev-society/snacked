const internals = {}

export const useStore = () => {
  // const states = [];
  const state = {}
  internals.validators = []

  const setState = (name, value) => {
    const isValid = internals.validators.every(({ key, validate }) => {
      console.log(validate)
      if (key !== name) { return true }
      return validate(value)
    })
    Object.assign(state, {[name]: { value, isValid }})
  }
  

  return [ state, setState ]
}

useStore.addValidator = (input, validator) => (internals.validators.push({ key: input, validate: validator }))
