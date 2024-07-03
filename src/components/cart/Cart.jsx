import React, { useContext } from 'react'
import { ShopContext } from '../AuthContext';
import { Cartitems } from './Cartitems';
import "./Cart.css"
export const Cart = () => {
    const {cartItems,addToCart,getTotalCartAmount,store}=useContext(ShopContext);
    const totalAmount=Math.floor(getTotalCartAmount());
    const offer= Math.round(totalAmount/10);
    const last=totalAmount-offer;
    const atlast=last+40;


    
    
  return (
    <>
    <div className='novalle'>
        
      <div className='priyan1'>
      
      {store.map((Product)=>{
        if(cartItems[Product.id] !== 0)
        {
          return ( 
            <div>
              <Cartitems data={Product}/>
            </div>
          )
        }
      
      })}


    </div>
    {totalAmount > 0 ?
    <div className='priyan'>
      <h5 className='bag4'>Order Summary</h5>
      <div className='bag'><span className='bag1'>Bag Total</span><span className='bag2'>$ {totalAmount}</span></div>
      <div className='bag'><span className='bag1'>Bag Discount</span><span className='bag2'>$ {offer}</span></div>
      <div className='bag'><span className='bag1'>Delivery</span><span className='bag2'>{last >500 ? <><span>FREE</span></>:<><span>$ 10.00</span></>}</span></div>
      <div className='bag'><span className='bag1'>Total</span><span className='bag2'>{last >500 ? <><span>${last}</span></>:<><span>${atlast}</span></>}</span></div>
      <button className='bag3'>Place Order</button>


        </div> :<img className='empty' src='https://cdn-icons-png.flaticon.com/128/11329/11329060.png'/>}
    </div>

    </>
  )
}
