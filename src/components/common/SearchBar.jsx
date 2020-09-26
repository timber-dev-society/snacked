import React from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import { VscClose } from 'react-icons/vsc'

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
      <div className="flex items-center bg-gray-200 rounded-full px-3 py-1 mr-2 mb-2">
        <div className="text-sm font-semibold text-gray-700 ">#react</div>
        <a href="#"><VscClose/></a>
      </div>
      <div className="flex items-center bg-gray-200 rounded-full px-3 py-1 mr-2 mb-2">
        <div className="text-sm font-semibold text-gray-700 ">#rubyonrails</div>
        <a href="#"><VscClose/></a>
      </div>
      <div className="flex items-center bg-gray-200 rounded-full px-3 py-1 mr-2 mb-2">
        <div className="text-sm font-semibold text-gray-700 ">#animation</div>
        <a href="#"><VscClose/></a>
      </div>
    </div>
  </div>
);
