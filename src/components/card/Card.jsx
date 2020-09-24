import React from 'react'
import List from '../list/List'

const Card = ({card}) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2 text-center text-teal-700">{card.title}</div>

      <div className="resources">
        {card.resources.map( resource => <List resource={resource} /> )}
      </div>

      <div className="text-center my-2">
        <button class="bg-transparent hover:bg-teal-700 border border-teal-700 hover:border-transparent text-teal-700 hover:text-white font-bold py-2 px-4 rounded-full">
          +
        </button>
      </div>
    </div>
  </div>
);

export default Card;
