import React, { useState } from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import Tag from '../tag/Tag'
import { useLocalStorage } from '../../hooks/localStorage'

export default () => {
  const [tags, setTags] = useLocalStorage('tags', ['react', 'rubyonrails', 'awesome'])
  const [inputTag, setInputTag] = useState('');

  return (
    <div className="searchbar my-3">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span className="text-gray-500 text-2xl">
            <BiSearchAlt/>
          </span>
        </div>
        <input
          className="text-2xl shadow appearance-none border pl-10 p-3 rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="q"
          type="text"
          placeholder="Recherche"
          value={inputTag}
          onChange={ e => setInputTag(e.target.value)}
          onKeyPress={ e => {
            if (e.key === "Enter" && !e.shiftKey) {
              setTags([e.target.value, ...tags]);
              setInputTag('')
            }
          }} />
      </div>

      <div className="flex items-center my-2">
        {tags.map(tagName => <Tag tagname={tagName} setTags={setTags} tags={tags} />)}
      </div>
    </div>
  )
}
