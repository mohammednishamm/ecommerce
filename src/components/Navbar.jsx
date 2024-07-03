import React from 'react'
import { BsCart4 } from "react-icons/bs";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Home.css'
const Navbar = () => {
    const location =useLocation()
    const isCartPage = location.pathname === '/cart';
    const navigate=useNavigate()
  return (
    <div className={isCartPage? "z-3 position-absolute top-0 w-100 d-flex pt-4 pb-4 justify-content-between pe-2 ps-2 navbar-cart":"z-3 position-absolute top-0 w-100 d-flex pt-4 pb-4 justify-content-between pe-2 ps-2"}>
        <div className='d-flex gap-5 align-items-center'>
        <span className="fw-bolder fs-2 text-white" onClick={()=>navigate("/")}>            K I Y A D O 
        </span>
        {/* <span className='text-white'>
            store
        </span> */}
        </div>

      <Link to="/cart">  <BsCart4 className='text-white fs-1 me-2'/></Link>
        
    </div>
  )
}

export default Navbar