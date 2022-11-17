import React from 'react'
import { Link } from 'react-router-dom'

import { persons } from '../contants'

const Products = () => {

  return (
    <div>
    <div class="my-20 px-2 lg:px-20 ">
      <div class="flex flex-row justify-between my-5">

   
        <h2 class="text-3xl">Far & Stop</h2>
        <a href="#" class="flex flex-row text-lg hover:text-purple-700">
          Tümünü Göster
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    <div class="grid grid-flow-row grid-cols-2  md:grid-cols-3 lg:grid-cols-3  xl:grid-cols-4 gap-4">
    
          {persons.map(person => (
          <div  class="shadow-lg rounded-lg border-2 border-gray-200 shadow-2xl p-2 ">
          <a href={`${person.id}`}>
            <img src={person.coverSrc} class="rounded-tl-lg   rounded-tr-lg" />
          </a>
            <h3 className='min-h-[50px]'> {person.name} </h3>
          <div class="">
            <div class="flex flex-col xl:flex-row justify-between">
              <a href={`${person.id}`} class="py-2 pr-4 lg:px-6 bg-red-600 rounded-full py-2  my-2 text-sm text-white hover:bg-purple-700 flex flex-row mx-auto" >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
                İncele
              </a>
            </div>
          </div>
        </div> 
          ))}
        </div>
      </div>
    </div>
    
  )
}

export default Products



/* 
  <h3> {person.name} </h3>
  <div class="flex flex-col xl:flex-row justify-between">
    <a href={`${person.id}`} class="bg-red-600 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-purple-700 flex flex-row justify-center" >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>Detayları gör</a> */