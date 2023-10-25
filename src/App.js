import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
//import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Contacto from './components/NavLinks/Contacto';
import Carrito from './components/NavLinks/Carrito/Carrito';


import { CartContext, CartProvider} from './context/CartContext';
import { Children } from 'react';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CartProvider>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/:categoryId' element= {<ItemListContainer/>}/>
          <Route path='/item/:itemId' element = {<ItemDetailContainer />}/>
          <Route path='/Contacto' element = {<Contacto/>}/>
          <Route path='/carrito' element = {<Carrito/>}/>
          <Route path='*' element ={<h1>404 NOT FOUND</h1>}/>
        </Routes>
      </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
