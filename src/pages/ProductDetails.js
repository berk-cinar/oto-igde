import React, { useState } from 'react';
import { persons } from '../contants';
import { AiFillInstagram } from 'react-icons/ai';

function ProductDetails(props) {

  const url = window.location.pathname.substring(1);
  console.log(url);



  let parcano = `${url}` -1
  let parcaismi = persons[`${parcano}`]

  return (

<div class='pt-6 items-center '>
<section class="text-gray-700 body-font overflow-hidden bg-white">
  
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" class="lg:max-h-[65vh] lg:max-w-[30vw] lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={`/product${url}.jpg`} />
      <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 class="text-sm title-font text-gray-500 tracking-widest">{parcaismi.name}</h2>
        <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{parcaismi.name}</h1>
        <div class="flex mb-4">
          <span class="flex items-center">
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <span class="text-gray-600 ml-3">17 Reviews</span>
          </span>

          <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                <a href='https://www.instagram.com/otoigde/' class="text-gray-500">
                  <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a href='https://www.facebook.com/otoigde/' class="ml-2 w-5 h-5 text-gray-500">
                  <AiFillInstagram className='w-5 h-5'/>
                </a>
 
          </span>
        </div>
        <p class="leading-relaxed mb-10">Fam locavore kickstarter chia microdosing poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
        <p class="mb-3 font-normal text-gray-900 dark:text-gray-900"><span className='font-bold'> Marka:</span>   {parcaismi.marka}</p>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-900"> <span className='font-bold'> Kategori:</span>   {parcaismi.category}</p>
                  <p class="mb-8 font-normal text-gray-700 dark:text-gray-900"><span className='font-bold'> Durum:</span>   {parcaismi.durum}</p>
        <div class="flex">
          <span class="title-font font-medium text-2xl text-gray-900">₺{parcaismi.price}</span>
          <button class="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Hemen Ara</button>
        </div>
      </div>
    </div>
  </div>
</section>
</div>

  )
}

export default ProductDetails;