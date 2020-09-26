import React, { useState } from 'react';
import Header from './components/common/Header'
import SearchBar from './components/common/SearchBar'
import CardContainer from './components/card/CardContainer'
import Modal from './components/common/Modal'

import cards from './data/cards'

const App = () => {
  const [ modalShow, setModalShow ] = useState(false)

  return (
    <div className="App container mx-auto">
      <Header/>
      <SearchBar />
      <CardContainer cards={cards} setModalShow={setModalShow} />
      <Modal show={modalShow} setModalShow={setModalShow} />
    </div>
  )
}

export default App;
