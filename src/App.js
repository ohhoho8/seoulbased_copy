import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import TopList from "./TopList";
import TopItem from "./TopItem";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/TOP" element={<TopList />} />
          <Route path="/TOP_1" element={<TopItem />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
