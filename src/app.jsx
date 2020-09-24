import React from 'react';
import Header from './components/common/Header'
import SearchBar from './components/common/SearchBar'
import CardContainer from './components/card/CardContainer'

import cards from './data/cards'

const App = () => (
  <div className="App container mx-auto">
    <Header/>
    <SearchBar />
    <CardContainer cards={cards}/>
  </div>
);

export default App;
