import { useState } from "react";
import "./css/styles.css";
import ProductCard from "./components/ProductCard";
import Products from "./data/products";

function App() {  
  return (
    <div className="container">
      {Products.map(Product => {
        return <ProductCard Product={Product} />
      })}
    </div>
  )
}

export default App
