import React, { cloneElement, useRef }  from 'react'
import PropTypes from 'prop-types'

import Symbols from './symbols'
import { Wrapper } from './wrapper'
import { useStore } from './store'

export const Form = ({ children, ...props }) => {

  const [ state, setState ] = useStore()
  const validatorRef = useRef()

  const renderChildren = (children) => {
    if (typeof children === 'string') { return children }

    return children.map((child, key) => {

      if (!child.type.kind && child.props.children) {
        const children = child.props.children.type ? [child.props.children] : child.props.children
        const props = {
          ...child.props,
          children,
        }
        
        return (<Wrapper key={key}>{cloneElement(child, props)}</Wrapper>)
      }
      
      switch (child.type.kind) {
        case Symbols.Inputs:
          const inputProps = {
            ...child.props,
            handleChange: (value) => { setState(child.props.name, value) },
          }
          setState(child.props.name, child.props.value ?? '')

          return (<Wrapper key={child.props.name}>{cloneElement(child, inputProps)}</Wrapper>)

        case Symbols.Submits:
          const submitProps = {
            ...child.props,
            onClick: () => { },
          }

          return (<Wrapper key={key}>{cloneElement(child, submitProps)}</Wrapper>)

        case Symbols.Validators:
          const validatorProps = {
            ...child.props,
            ref: validatorRef,
            handleChange: (value, isValid) => { setState(child.props.children.props.name, value, isValid) },
          }
          useStore.addValidator({ input: child.props.children.props.name, validator: child })

          return (<Wrapper key={key}>{cloneElement(child, validatorProps)}</Wrapper>)

        default:
          return ({child})
      }
    })
  }

  const onSubmit = (event) => {
    event.preventDefault()
    console.log(validatorRef)

    props.onSubmit(state)
  }

  return (
    <form onSubmit={onSubmit}>
      {renderChildren(children)}
    </form>
  )
}

Form.propTypes = {
  children: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired,
}
