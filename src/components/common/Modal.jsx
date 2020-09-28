import React from 'react'
import { BiEdit } from 'react-icons/bi'

const Modal = ({show, children}) => (
  <div className={"fixed z-10 inset-0 overflow-y-auto " + (show ? '' : 'hidden')}>
    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div className="fixed inset-0 transition-opacity">
        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>
      <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
      <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all w-full sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
        {children}
      </div>
    </div>
  </div>
)

const ModalResourceEdit = ({show, setModalShow, resource}) => (
  <Modal show={show}>
    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
      <div className="sm:flex sm:items-start">
        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">

          <h2 className="text-gray-500">{resource.name}</h2>
          <div className="flex items-center">
            <BiEdit className="text-teal-500 text-xl" /> 
            <h3 className="text-lg leading-6 font-medium text-gray-900 ml-3" id="modal-headline">
              Modifier la ressource
            </h3>
          </div>
          <div className="mt-2">
            <p className="text-sm leading-5 text-gray-500">

            <form class="w-full">
              <div class="md:flex md:items-center mb-6">
                <div class="md:w-3/12">
                  <label class="block text-gray-500 font-bold mb-1 md:mb-0 pr-4" for="inline-full-name">
                    Nom
                  </label>
                </div>
                <div class="md:w-9/12">
                  <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value={resource.name} />
                </div>
              </div>
              <div class="md:flex md:items-center mb-6">
                <div class="md:w-3/12">
                  <label class="block text-gray-500 font-bold mb-1 md:mb-0 pr-4" for="inline-password">
                    Description
                  </label>
                </div>
                <div class="md:w-9/12">
                  <textarea className="w-full bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" rows="4" value={resource.description}></textarea>
                </div>
              </div>
              <div class="md:flex md:items-center mb-6">
                <div class="md:w-3/12">
                  <label class="block text-gray-500 font-bold mb-1 md:mb-0 pr-4" for="inline-full-name">
                    Url
                  </label>
                </div>
                <div class="md:w-9/12">
                  <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value={resource.url} />
                </div>
              </div>
            </form>

            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
      <span className="flex w-full rounded-md shadow-sm sm:ml-3 sw-auto">
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-teal-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-teal-500 focus:outline-none focus:border-teal-700 focus:shadow-outline-teal transition ease-in-out duration-150 sm:text-sm sm:leading-5"
          onClick={() => {
            setModalShow(false)
          }}>
          Modifier
        </button>
      </span>
      <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 w-auto">
        <button 
          type="button" 
          className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
          onClick={() => {
            setModalShow(false)
          }}>
          Annuler
        </button>
      </span>
    </div>
  </Modal>
)

export { ModalResourceEdit }