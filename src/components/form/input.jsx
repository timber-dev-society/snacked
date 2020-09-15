import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Symbols from './symbols'

const style = {
  'border': 'none',
  'backgroundColor': 'pink',
}

export const Input = ({ name, ...props }) => {

  const [ value, setValue ] = useState(() => (props.value ?? ''))

  return (
    <input
      name={name}
      style={style}
      type="text" 
      value={value}
      placeholder=''
      onSubmit={() => console.log('submit')}
      onChange={(event) => {
        setValue(event.target.value)
        props.handleChange(event.target.value)
      }} 
    />
  )
}

Input.kind = Symbols.Inputs

Input.propTypes = {
  name: PropTypes.string,
}
