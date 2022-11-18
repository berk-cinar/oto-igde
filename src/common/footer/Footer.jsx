import React from "react"
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer className="bg-[#0f3460]">
      
        <div className='container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-y-12 px-1 lg:px-0'>
          <div>
            <h1 className="text-2xl">İğde Oto</h1>
            <p>Oto Aksesuar & Yedek Parça 7/24 İğde Oto güvencesiyle hizmetinizde</p>
          </div>

          <div>
            <h2>Hakkımızda</h2>
            <ul>
              <li>Şubelerimiz</li>
              <li>Gizlilik Politikası</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Müşteri Hizmetleri</h2>
            <ul>
              <li>Yardım Merkezi </li>
              <li>Satın alım </li>
              <li>Siparişleriniz </li>
              <li> Ürün Kıyaslama </li>
            </ul>
          </div>
          <div className='box'>
            <h2>Bize Ulaşın </h2>
            <ul>
              <li>Ergazi Mahallesi 1803. Cadde Batı Prestij Ticaret Merkezi 13-B13 Yenimahalle/ANKARA  </li>
              <li>Email: otoigde.destek@gmail.com</li>
              <li>Telefon: +90 554 662 39 17 </li>
            </ul>
          </div>
        </div>
       
      </footer>
      <div class="bg-[#0f3460]  px-6">
    <div class="flex justify-center text-gray-300 gap-x-6">
      <a href="#!" type="button" class="rounded-full border-2 text-gray-300 border-gray-400 text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
        <svg aria-hidden="true"
        focusable="false"
        data-prefix="fab"
        data-icon="facebook-f"
        class="w-2 h-full mx-auto"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
      >
        <path
          fill="currentColor"
          d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
        ></path>
        </svg>
      </a>

      <a href="#!" type="button" class="rounded-full border-2 text-gray-300 border-gray-400 text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
        <svg aria-hidden="true"
        focusable="false"
        data-prefix="fab"
        data-icon="instagram"
          class="w-3 h-full mx-auto"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
          ></path>
        </svg>
      </a>
    </div>
  </div>

  <div class="text-center bg-[#0f3460] text-gray-400 p-4">
    © 2021 Copyright. 
    <a class="text-whitehite" href="https://tailwind-elements.com/"> All Rights Reserved</a>
  </div>


    </>
  )
}

export default Footer;