import React from 'react'
import { BiEdit } from 'react-icons/bi'

const List = ({resource}) => (
  <div className="flex items-center">
    <a href={resource.url} target="_blank" className="flex items-center px-4 py-3 border-b hover:bg-gray-100">
      <p class="text-gray-600 text-sm mx-2">
          <span class="font-bold" href="#">{resource.name}</span> {resource.description}
      </p>
    </a>
    <a href="#" className="ml-auto text-gray-600 hover:text-teal-500" ><BiEdit/></a>
  </div>
);

export default List;