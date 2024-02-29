import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import TopList from "./components/TopList";
import TopItem from "./components/TopItem";

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
