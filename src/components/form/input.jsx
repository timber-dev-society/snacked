import React, { useState } from 'react';

const style = {
  'border': 'none'
}

export const Input = () => {
  const [value, setValue] = useState('');

  return (
    <input
      style={style}
      type="text" 
      value={value}
      placeholder=''
      onChange={(event) => setValue(event.target.value)} 
    />
  );
};
