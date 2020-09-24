import React from 'react'
import { BiSearchAlt } from 'react-icons/bi'

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

    <div className="my-2">
      <a href="#" className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">#react</a>
      <a href="#" className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#ruby</a>
      <a href="#" className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#awesome</a>
    </div>
  </div>
);
