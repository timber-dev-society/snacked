import React, { cloneElement }  from 'react'
import PropTypes from 'prop-types'

import Symbols from './symbols'
import { Wrapper } from './wrapper'
import { useStore } from './store'

export const Form = ({ children, ...props }) => {

  const [ state, setState ] = useStore()

  const renderChildren = (children) => {
    return children.map((child, key) => {
      if (!child.type.kind && child.props.children) {
        if (child.props.children.type) {
          return renderChildren([child.props.children])
        }
        return renderChildren(child.props.children)
      }
      
      switch (child.type.kind) {
        case Symbols.Inputs:
          const inputProps = {
            ...child.props,
            handleChange: (value) => { setState(child.props.name, value ) },
          }
          setState(child.props.name, child.props.value ?? '')
          return (<Wrapper key={child.props.name}>{cloneElement(child, inputProps)}</Wrapper>)
        case Symbols.Submits:
          const submitProps = {
            ...child.props,
            onClick: () => {
             
            },
          };
          return (<Wrapper key={key}>{cloneElement(child, submitProps)}</Wrapper>)
        default:
          return ''
      }
    })
  }

  const onSubmit = (event) => {
    event.preventDefault()

    props.onSubmit(state)
  }

  return (
    <form onSubmit={onSubmit}>
      {renderChildren(children)}
    </form>
  )
}

Form.propTypes = {
  children: PropTypes.array,
  onSubmit: PropTypes.func,
}

