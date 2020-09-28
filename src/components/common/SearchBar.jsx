import React from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import { VscClose } from 'react-icons/vsc'
import Tag from '../tag/Tag'

export default () => (
  <div className="searchbar my-3">
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <span className="text-gray-500 text-2xl">
          <BiSearchAlt/>
        </span>
      </div>
      <input className="text-2xl shadow appearance-none border pl-10 p-3 rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="q" type="text" placeholder="Recherche" />
    </div>

    <div className="flex items-center my-2">
      <Tag name="react" />
      <Tag name="rubyonrails" />
      <Tag name="awesome" />
    </div>
  </div>
);
