import "./App.css";
import AppNavbar from "./component/AppNavbar";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Products from "./component/Products";
import Cart from "./component/Cart";
import Edit from "./component/Edit";
import UpdateProduct from "./component/UpdateProduct";
import AddProduct from "./component/AddProduct";

function App() {
  return (
    <div className="App">
      <AppNavbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/Edit/:id" element={<Edit />}></Route>
        <Route path="/Update/:id" element={<UpdateProduct />}></Route>
        <Route path="/Delete/:id" element={<Products />}></Route>
        <Route path="/AddProduct" element={<AddProduct />}></Route>
      </Routes>
    </div>
  );
}

export default App;
