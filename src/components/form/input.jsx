import React from 'react'
import PropTypes from 'prop-types'

import Symbols from './symbols'

const style = {
  'border': 'none',
  'backgroundColor': 'pink',
}

export const Input = ({ name, ...props }) => {
  console.log(props)

  return (
    <input
      name={name}
      style={style}
      type="text" 
      value={props.state[name]?.value}
      placeholder=''
      onChange={(event) => {
        props.setState({
          ...props.state,
          [name]: event.target.value
        })
      }} 
    />
  );
};

Input.kind = Symbols.Inputs

Input.propTypes = {
  name: PropTypes.string,
}
