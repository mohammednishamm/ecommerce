import React, { useContext } from 'react'
import { ShopContext } from '../AuthContext';
import "./Cart.css"
export const Cartitems = (props) => {
    const {id,image,title,category,price}=props.data;
    const {cartItems,addToCart,removeFromCart,deleteCart}=useContext(ShopContext);
  return (

    <div className='erl'>
        <img className='erlimg' src={image} alt="" />

        <div className='erling'>
            <h6 className='erl2'>Category: {category}</h6>
            
            <span className='erl2'>{title}</span>
            


        </div>
        <span className='erlp'> $ {Math.floor(price)}</span>
        <div className='erld'>
            <span className='erlm' onClick={()=>addToCart(id)}>+</span>
            <span className='erlm'>{cartItems[id]}</span>
            <span className='erlm' onClick={()=>removeFromCart(id)}>-</span>
        </div>
        <span className='xx' onClick={()=>deleteCart(id)}>X</span>

    </div>
  )
}
