import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import './Home.css'
import { useNavigate } from 'react-router-dom'
import { Products } from './Products'
import { ShopContext } from './AuthContext'
const Home = () => {

   const {cartItems}=useContext(ShopContext)

   console.log(cartItems,"nisham")

    const handleScroll = () => {
        window.scrollBy({
          top: 700, 
          left: 0,
          behavior: 'smooth'
        });
      };

  return (
    <>
    <div>
      
                <div className='nisham d-flex flex-column align-items-start justify-content-center ps-5'>
                    <span className='text-white fw-semibold'>HOME OFFICE PRODUCTS</span>
                    <h1 className='fs-md-1  fw-bolder  main-font'>Stay productive and get more work done!</h1>
                    <button className=' pe-5 ps-5 rounded-3 border-0 main-button' onClick={handleScroll}>Shop Collection</button>
                </div>
         
    </div>
    <Products/>
    </>
  )
}

export default Home