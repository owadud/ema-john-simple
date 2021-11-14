import * as React from "react";
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import { Routes, Route, Link } from "react-router-dom";
import Review from "./components/Review/Review";
import NotFound from "./components/NotFound/NotFound";
import Manage from "./components/Manage/Manage";
import ProductDetails from "./components/ProductDetails/ProductDetails";

function App() {
  return (
    <div>

      <Header></Header>
      <Routes >

        <Route path="/" element={<Shop />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/.review" element={<Review />} />
        <Route path="/manage" element={<Manage />} />
        <Route path="/product/:productKey" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />



      </Routes>






    </div>
  );
}

export default App;
