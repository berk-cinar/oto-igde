import React from 'react'
import { Link } from 'react-router-dom'

const Brand = () => {
  return (
    <div className='px-4'>
            <div class="md:flex lg:px-20 md:flex-row mt-20">
      <div class="md:w-3/5 flex flex-col justify-center items-center">
        <h2 class="font-serif text-5xl text-gray-600 mb-4 text-center md:self-start md:text-left">Oto Yedek Parça & Aksesuar</h2>
        <p class="uppercase text-gray-600 tracking-wide text-center md:self-start md:text-left">7 & 24 Canlı Destek</p>
        <p class="uppercase text-gray-600 tracking-wide text-center md:self-start md:text-left">Herkes düşünür, Oto İğde yapar</p>
        <Link to="/ürünlerimiz" class="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-4 px-8 text-gray-50 uppercase text-xl md:self-start my-5">
          Ürünlere göz at</Link>
      </div>
      <div>
        <img className='mx-auto' src="./hero-img.png" />
      </div>
    </div>
    </div>
  )
}

export default Brand