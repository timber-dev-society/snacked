import React, { useState, cloneElement } from 'react'
import PropTypes from 'prop-types'

import Symbols from './symbols'
import { Wrapper } from './wrapper'

export const Validator = ({ children, ...props }) => {
  const [ error, setError ] = useState('')

  const inputProps = {
    ...children.props,
    handleChange: (value) => { 
      let isValid = true
      if (props.regex) {
        isValid = props.regex.test(value)
      }
      props.handleChange(value, isValid) 
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
