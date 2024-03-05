import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./CartContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import TopList from "./components/TopList";
import TopItem from "./components/TopItem";
import DressList from "./components/DressList";
import DressItem from "./components/DressItem";
import Cart from "./components/Cart";

function App() {
  const [cart,setCart] = useState([])

  return (
    <CartProvider>
      <Router>
      <div className="App">
        <Header cart={cart} setCart={setCart}/>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/TOP" element={<TopList />} />
          <Route path="/MADE" element={<TopList />} />
          <Route path="/NEW-IN" element={<TopList />} />
          <Route path="/BASIC" element={<TopList />} />
          <Route path="/UNISEX" element={<TopList />} />
          <Route path="/OUTER" element={<TopList />} />
          <Route path="/BOTTOM" element={<TopList />} />
          <Route path="/DRESS" element={<DressList />} />
          <Route path="/SHOES-BAG-ACC" element={<TopList />} />
          <Route path="/당일출고" element={<TopList />} />
          <Route path="/SALE" element={<TopList />} />
          <Route path="/TOP_1" element={<TopItem />} cart={cart} setCart={setCart}/>
          <Route path="/Dress_1" element={<DressItem />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
        <Footer />
      </div>
      </Router>
    </CartProvider>
  );
}

export default App;
