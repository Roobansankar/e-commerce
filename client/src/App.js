

import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { useState, createContext } from "react";
import ProductDetails from "./pages/shop/Products/ProductDetails";
import Signup from "./components/Singup";
import Login from "./components/Login";

export const cartContext = createContext();

function App() {
  const [cart, setCart] = useState([]);
  const user = localStorage.getItem("token");

  return (
    <div className="App">
      <cartContext.Provider value={{ cart, setCart }}>
        <Router>
          {!user ? (
            <Routes>
              {/* Default to login page if user is not logged in */}
              <Route path="*" element={<Navigate to="/login" />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          ) : (
            <>
              <Navbar cart={cart} />
              <Home />
              <Routes>
                <Route path="/" element={<Shop />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Navigate to="/" />} />
              </Routes>
              <Footer />
            </>
          )}
        </Router>
      </cartContext.Provider>
    </div>
  );
}

export default App;











