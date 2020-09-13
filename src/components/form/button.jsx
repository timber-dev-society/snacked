import React from 'react'

import Symbols from './symbols'

export const Button = ({ children, onClick }) => (
  <button onClick={onClick}>{ children }</button>
);

Button.kind = Symbols.Submits
