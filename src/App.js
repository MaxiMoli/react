import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
//import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Contacto from './components/NavLinks/Contacto';
import Carrito from './components/NavLinks/Carrito';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/NavLinks/:categoryId' element= {<ItemListContainer/>}/>
          <Route path='/item/:itemId' element = {<ItemDetailContainer />}/>
          <Route path='/NavLinks/Contacto' element = {<Contacto/>}/>
          <Route path='/NavLinks/carrito' element = {<Carrito/>}/>
          <Route path='*' element ={<h1>404 NOT FOUND</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
