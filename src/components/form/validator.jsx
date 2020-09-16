import React, { useState, cloneElement } from 'react'
import PropTypes from 'prop-types'

import Symbols from './symbols'
import { Wrapper } from './wrapper'

export const Validator = ({ children, ...props }) => {
  const [ error, setError ] = useState('')

  const inputProps = {
    ...children.props,
    handleChange: (value) => { 
      console.log(value, 'hey hey')
      props.handleChange(value) 
    },
  }
  console.log('rendering validator')

  return (<Wrapper>{cloneElement(children, inputProps)}</Wrapper>)
}

Validator.kind = Symbols.Validators

Validator.propTypes = {
  children: PropTypes.element.isRequired,
  trigger: PropTypes.oneOf(['onChange', 'onSubmit']).isRequired,
  required: PropTypes.bool,
  regex: PropTypes.instanceOf(RegExp),
}
