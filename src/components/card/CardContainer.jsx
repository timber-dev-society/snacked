import React from 'react';
import Card from './Card'

export default ({cards}) => (
  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
    {cards.map( card => <Card card={card} /> ) }
  </div>
)