import React, { useContext, useState } from 'react';
import './Product.css';
import { ShopContext } from './AuthContext';
import { useNavigate } from 'react-router-dom';

export const Products = () => {
  const { store ,addToCart,cartItems} = useContext(ShopContext);
  const [selectedCategory, setSelectedCategory] = useState('All');
const navigate=useNavigate()
  const filterProducts = (category) => {
    setSelectedCategory(category);
  };

  const getFilteredProducts = () => {
    if (selectedCategory === 'All') {
      return store;
    }
    return store.filter((item) => item.category === selectedCategory.toLowerCase());
  };

  const filteredProducts = getFilteredProducts();

  return (
    <>
      <div className='container d-flex gap-3 pt-5 pb-5'>
        <span className='filter-jacket' onClick={() => filterProducts('All')}>All products</span>
        <span className='filter-jacket' onClick={() => filterProducts("men's clothing")}>Men</span>
        <span className='filter-jacket' onClick={() => filterProducts("women's clothing")}>Women</span>
        <span className='filter-jacket' onClick={() => filterProducts('electronics')}>Electronics</span>
        <span className='filter-jacket' onClick={() => filterProducts('jewelery')}>Jewels</span>
      </div>
      <div className='d-flex flex-wrap container justify-content-between'>
        {filteredProducts.map((item) => {
          return (
            <div className='product12-border12 mt-2' key={item.id}>
              <div className='image-container'>
                <img className='product-img' src={item.image} alt="" />
                <div className='caption9'>
                {cartItems[item.id] ? (
                    <button className='caption8' onClick={()=>navigate("/cart")}>
                      Go to Cart
                    </button>
                  ) : (
                    <button className='caption8' onClick={() => addToCart(item.id)}>
                      Add to Cart
                    </button>
                  )}                </div>
              </div>
              <div className='product-love'>
                <span className='product-name'>{item.title}</span>
                {/* <span className='product-name'>{item.description}</span> */}

                <img className='product-img1' alt="" />
              </div>
              <span className='product-price'>$ {item.price}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};
