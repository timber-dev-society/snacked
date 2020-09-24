import React from 'react'
import List from '../list/List'
import { IoMdAdd } from 'react-icons/io'
import { FiEdit2 } from 'react-icons/fi'

const Card = ({card}) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto md:mx-none">
    <div className="px-6 py-4">
      <div className="flex justify-center items-center">
        <div className="font-bold text-xl text-teal-700">{card.title}</div>
        <a href="#" className="ml-1 text-gray-600 hover:text-gray-900 hover:text-teal-500"><FiEdit2/></a>
      </div>

      <div className="resources">
        {card.resources.map( resource => <List resource={resource} /> )}
      </div>

      <div className="text-center my-2">
        <button class="bg-transparent hover:bg-teal-700 border border-teal-700 hover:border-transparent text-teal-700 hover:text-white font-bold p-4 rounded-full">
          <IoMdAdd/>
        </button>
      </div>
    </div>
  </div>
);

export default Card;
