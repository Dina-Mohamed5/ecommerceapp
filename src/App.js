import logo from './logo.svg';
import NavBar from './components/NavBar';
import { Nav } from 'react-bootstrap';
import {Routes, Route} from  'react-router-dom';
import Product from './components/Product';
import Cart from './components/Cart';


function App() {


  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Product />} />
        <Route path='cart' element={<Cart />} />
      </Routes>
    </div>
  );
}
export default App;
