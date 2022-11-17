import React from "react"
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid grid-cols-2 lg:grid-cols-4 gap-y-12'>
          <div className=''>
            <h1 className="text-2xl">İğde Oto</h1>
            <p>Oto Aksesuar & Yedek Parça 7/24 İğde Oto güvencesiyle hizmetinizde</p>

          </div>

          <div className=''>
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
              <li>Naci Çakır Mahallesi 543. Sokak 41/5 Etimesgut / Ankara </li>
              <li>Email: otoigde.destek@gmail.com</li>
              <li>Telefon: +90 554 662 39 17 </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;
