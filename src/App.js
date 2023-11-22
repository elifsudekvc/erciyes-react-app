import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Link } from 'react-router-dom';
import Home from "./pages/Home"
import Products from "./pages/Products"
import ProductsDetail from "./pages/ProductsDetail"
import StateIntro from './state/StateIntro';
import StateProducts from './state/StateProducts';
import Users from './pages/Users';


function App() {
  //return <StateProducts/>
  return (
    <BrowserRouter>
      <ul style={{display:'flex', justifyContent:'space-evenly'}}>
      <li> <Link to="/" >HOME</Link></li>
      <li><Link to="/customers">Customers</Link> </li>
      <li><Link to="/Users">Users</Link></li>
    </ul>

    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/customers" element={<Products></Products>}></Route>
      <Route path="/customers/:id" element={<ProductsDetail></ProductsDetail>}></Route>
      <Route path="/Users" element={<Users></Users>} ></Route>
    </Routes>

    </BrowserRouter>
  );
}

export default App;
