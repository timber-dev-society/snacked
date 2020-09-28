import React from 'react';
import { VscClose } from 'react-icons/vsc'

export default ({tagname, tags, setTags}) => {
  return (
    <div className="flex items-center bg-gray-200 rounded-full px-3 py-1 mr-2 mb-2">
      <div className="text-sm font-semibold text-gray-700 ">#{tagname}</div>
      <button onClick={ () => {
        setTags(tags.filter(e => e !== tagname))
      }}>
        <VscClose/></button>
    </div>
  )
}