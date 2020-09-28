import React, { useState } from 'react';
import Header from './components/common/Header'
import SearchBar from './components/common/SearchBar'
import CardContainer from './components/card/CardContainer'
import { ModalResourceEdit } from './components/common/Modal'

import cards from './data/cards'

const App = () => {
  const [ modalShow, setModalShow ] = useState(false)
  const [ selectedResource, setSelectedResource] = useState({})

  return (
    <div className="App container mx-auto">
      <Header/>
      <SearchBar />
      <CardContainer cards={cards} setModalShow={setModalShow} setSelectedResource={setSelectedResource} />
      <ModalResourceEdit show={modalShow} setModalShow={setModalShow} resource={selectedResource} />
    </div>
  )
}

export default App;
