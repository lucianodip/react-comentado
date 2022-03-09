import './styles.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route,Navigate} from 'react-router-dom'
import { Nosotros } from './pages/Nosotros'
import { Contacto } from './pages/Contacto'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartContext, CartProvider } from './context/CartContext'
import { useState } from 'react';
import{Cart} from "./components/Cart/Cart";


function App() {
    
    return (
        
        <CartProvider>
        <BrowserRouter>
          <NavBar/>

          <Routes>

              <Route path="/" element={<ItemListContainer/>}/>
              <Route path='/productos/:catId' element={ <ItemListContainer/> }/>
              <Route path='/detail/:itemId' element={ <ItemDetailContainer/> }/>
              
              <Route path='*' element={ <Navigate to='/'/> }/>
              <Route path='/cart' element={ <Cart/> }/>


          </Routes>
        </BrowserRouter>
        </CartProvider>
  );
}

export default App;
//