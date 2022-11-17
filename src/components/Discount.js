import React from 'react'

const Discount = () => {
  return (
    <div>
        
    <div class="rounded-lg shadow-lg bg-gradient-to-r from-white to-red-600 lg:from-red-800 lg:via-red-500 lg:to-transparent rounded-lg text-gray-100 my-20 flex flex-row">
      <div class="lg:w-3/5 w-full  p-12">
        <div class="lg:w-1/2 mx-auto mt-4">
          <h3 class="text-2xl font-extrabold  mb-4"> İlk alışverişe özel %10 indirim kazanmak ister misiniz ?</h3>
          <p class="mb-4 leading-relaxed"> İlk müşterilerimize özel sağladığımız fırsatlardan yararlanmak için hemen bize
          ulaşın.</p>
          <div>
            <button type="submit" class="bg-red-600 py-3 rounded-lg w-full">İğde Oto telefon: +90 543 876 32 21</button>
          </div>
        </div>
      </div>
      <div class="lg:w-2/5 w-full lg:flex lg:flex-row hidden">
        <img src="./discount.jpg" class="rounded-3xl h-56 mt-10" />
      </div>
    </div>
    </div>
  )
}

export default Discount