import React, { forwardRef, cloneElement, useImperativeHandle, useState } from 'react'
import PropTypes from 'prop-types'

import Symbols from './symbols'
import { Wrapper } from './wrapper'

export const Validator = forwardRef(({ children, ...props }, ref) => {
  const [ value, setValue ] = useState('')

  const inputProps = {
    ...children.props,
    handleChange: (newValue) => {
      setValue(newValue)
      if (props.trigger === 'onChange') { 
        if (props.regex && !props.regex.test(newValue)) { props.handleChange(newValue, false) }
      }

      props.handleChange(newValue, true) 
    },
  }

  useImperativeHandle(ref, () => ({
    handleSubmit: () => {
      if (props.trigger !== 'onSubmit') { return }

      if (props.notEmpty && value.trim() === '') { props.handleChange(value, false) }
    }
  }));

  return (<Wrapper>{cloneElement(children, inputProps)}</Wrapper>)
})

Validator.kind = Symbols.Validators

Validator.propTypes = {
  children: PropTypes.element.isRequired,
  trigger: PropTypes.oneOf(['onChange', 'onSubmit']).isRequired,
  required: PropTypes.bool,
  regex: PropTypes.instanceOf(RegExp),
}
