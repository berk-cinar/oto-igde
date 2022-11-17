import React from 'react';
import { Routes, Route, Outlet, Link } from "react-router-dom";

import ContactPage from '../pages/ContactPage';



const Header = () => {
  return (
    <div className=''>
            <div class=" px-2 md:flex md:flex-row md:justify-between text-center text-sm sm:text-base">
      <div class="flex flex-row justify-center">

        <Link className='p-4' to="/">
            <img className='w-[14vh] ' src="/logo.png" />
        </Link>



      </div>
      <div class="mt-6">
     
        <Link to="/" class="text-gray-600 hover:text-purple-600 p-4 px-3 sm:px-4">Anasayfa</Link>
        <Link to="/ürünlerimiz" class="text-gray-600 hover:text-purple-600 p-4 px-3 sm:px-4">Ürünler</Link>
        <Link to="/iletisim" class="bg-red-500 text-gray-50 hover:bg-red-700 p-3 px-3 sm:px-5 rounded">

            Bizi Arayın
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header