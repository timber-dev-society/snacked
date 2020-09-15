
export const useStore = () => {
  // const states = [];
  const state = {}

  const setState = (name, value) => {
    // states.push(newState)
    Object.assign(state, { [name]: value })
  }
  

  return [ state, setState ]
}