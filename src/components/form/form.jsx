import React, { cloneElement, useState }  from 'react'
import PropTypes from 'prop-types'

import Symbols from './symbols'
import { Wrapper } from './wrapper'

export const Form = ({ children }) => {

  const [state, setState] = useState(() => {
    return children.filter(item => (item.type.kind === Symbols.input))
                   .map(item => ({ name: item.props.name, value: '' }))
  })

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

Form.propTypes = {
  children: PropTypes.array,
  onSubmit: PropTypes.func,
}

