import React from 'react'

const List = ({resource}) => (
  <a href={resource.url} target="_blank" className="flex items-center px-4 py-3 border-b hover:bg-gray-100 -mx-2">
    <p class="text-gray-600 text-sm mx-2">
        <span class="font-bold" href="#">{resource.name}</span> {resource.description}
    </p>
  </a>
);

export default List;