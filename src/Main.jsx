import React from 'react'
import Footer from "./common/footer/Footer"
import Header from './common/Header'
import Home from './pages/Home'

import { Routes, Route, Outlet, Link } from "react-router-dom";
import ProductPage from './pages/ProductPage'
import ProductDetails from './pages/ProductDetails';
import ContactPage from './pages/ContactPage';



const Main = () => {
  return (
    <div class="mx-auto ">
     <Header />
      <Routes>
        <Route path="/">
          <Route index element={<Home/>} />
          <Route path="ürünlerimiz" element={<ProductPage />} />
          <Route path=":id"  element={<ProductDetails />} />
          <Route path="iletisim" element={<ContactPage/>} />
        </Route>
        </Routes>

        <Footer/>
  </div>
  )
}

export default Main