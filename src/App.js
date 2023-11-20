import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Link } from 'react-router-dom';
import Home from "./pages/Home"
import Products from "./pages/Products"
import ProductsDetail from "./pages/ProductsDetail"
import StateIntro from './state/StateIntro';
import StateProducts from './state/StateProducts';


function App() {
  return <StateProducts/>
  return (
    <BrowserRouter>
      <ul style={{display:'flex', justifyContent:'space-evenly'}}>
      <li> <Link to="/" >HOME</Link></li>
      <li><Link to="/Products">PRODUCTS</Link> </li>
    </ul>

    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/products" element={<Products></Products>}></Route>
      <Route path="/products/:id" element={<ProductsDetail></ProductsDetail>}></Route>
    </Routes>

    </BrowserRouter>
  );
}

export default App;
