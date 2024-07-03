import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { ShopContextProvider } from './components/AuthContext';
import { Products } from './components/Products';
import { Cart } from './components/cart/Cart';

function App() {
  return (
    <ShopContextProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
          <Route index element={<Home />} />
          <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
    </ShopContextProvider>
  );
}

export default App;
