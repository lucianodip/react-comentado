import './styles.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route,Navigate} from 'react-router-dom'
import { Nosotros } from './pages/Nosotros'
import { Contacto } from './pages/Contacto'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    
      <BrowserRouter>
          <NavBar/>

          <Routes>

              <Route path="/" element={<ItemListContainer/>}/>
              <Route path='/productos/:catId' element={ <ItemListContainer/> }/>
              <Route path='/detail/:itemId' element={ <ItemDetailContainer/> }/>
              {/* <Route path="./pages/Nosotros" element={ <Nosotros /> } />
              <Route path="./pages/Contacto" element={ <Contacto /> } />   */}
              <Route path='*' element={ <Navigate to='/'/> }/>

          </Routes>
      </BrowserRouter>
      
    
  );
}

export default App;
//