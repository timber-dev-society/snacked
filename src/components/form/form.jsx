import React, { cloneElement, useState }  from 'react'

import Symbols from './symbols'
import { Wrapper } from './wrapper'
let i = 0

export const Form = ({ children }) => {
  
  
  const [state, setState] = useState(() => {
    return children.filter(item => (item.type.kind === Symbols.input))
                   .map(item => ({ name: item.props.name, value: '' }))
  })

  console.log(++i)
  const onSubmit = (event) => {
    event.preventDefault()
    console.log(state)
  }

  return (
    <form onSubmit={onSubmit}>
      {children.map((child, key) => {
        switch (child.type.kind) {
          case Symbols.Inputs:
            const inputProps = {
              ...child.props,
              setState,
              state,
            };
            return (<Wrapper key={child.props.name}>{ cloneElement(child, inputProps) }</Wrapper>)
          case Symbols.Submits:
            const submitProps = {
              ...child.props,
              onClick: () => {
                console.log(state)
              },
            };
            return (<Wrapper key={key}>{ cloneElement(child, submitProps) }</Wrapper>)
          default:
            return ''
        }
      })}
    </form>
  )
}

