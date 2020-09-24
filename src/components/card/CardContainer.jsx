import React from 'react';
import Card from './Card'

export default ({cards}) => (
  <div className="grid grid-rows-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {cards.map( card => <Card card={card} /> ) }
    <button class="max-w-sm w-full mx-auto h-full bg-transparent hover:bg-teal-500 text-teal-700 font-semibold hover:text-white py-2 px-4 border border-teal-500 hover:border-transparent rounded">
      Ajouter une collection
    </button>
  </div>
)