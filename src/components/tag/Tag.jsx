import React from 'react';
import { VscClose } from 'react-icons/vsc'

export default ({name}) => (
  <div className="flex items-center bg-gray-200 rounded-full px-3 py-1 mr-2 mb-2">
    <div className="text-sm font-semibold text-gray-700 ">#{name}</div>
    <button><VscClose/></button>
  </div>
)