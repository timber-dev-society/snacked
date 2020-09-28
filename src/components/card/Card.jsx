import React, { useState } from 'react'
import List from '../list/List'
import { IoMdAdd } from 'react-icons/io'
import { FiEdit2 } from 'react-icons/fi'
import { BsCheckCircle} from 'react-icons/bs'

const Card = ({card, setModalShow, setSelectedResource}) => {
  return (
    <div className="max-w-md rounded overflow-hidden shadow-lg mx-auto md:mx-none">
      <div className="px-6 py-4">
        <CardTitle card={card} />

        <div className="resources">
          {card.resources.map( resource => <List resource={resource} setModalShow={setModalShow} setSelectedResource={setSelectedResource} /> )}
        </div>

        <div className="text-center my-2">
          <button class="bg-transparent hover:bg-teal-700 border border-teal-700 hover:border-transparent text-teal-700 hover:text-white font-bold p-4 rounded-full">
            <IoMdAdd/>
          </button>
        </div>
      </div>
    </div>
  )
}

const CardTitle = ({card}) => {
  const [title, setTitle] = useState(card.title)
  const [editTitle, setEditTitle] = useState(false)

  if ( !editTitle ) {
    return (
      <div className="card-title flex justify-center items-center">
        <div className="font-bold text-xl text-teal-700">{title}</div>
        <button 
          className="ml-1 text-gray-600 hover:text-gray-900 hover:text-teal-500"
          onClick={() => {
            setEditTitle(true)
          }}
        >
          <FiEdit2/>
        </button>
      </div>
    )
  } else {
    return (
      <div className="card-title flex justify-center items-center">
        <input
          type="text"
          value={title}
          className="font-bold text-xl text-teal-700 text-center shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          onChange={ (e) => {
            setTitle(e.target.value)
          }}/>

        <button 
          className="ml-1 text-gray-600 hover:text-gray-900 hover:text-teal-500 text-xl"
          onClick={() => {
            setEditTitle(false)
          }}
        >
          <BsCheckCircle/>
        </button>
      </div>
    )
  }
}


export default Card;
