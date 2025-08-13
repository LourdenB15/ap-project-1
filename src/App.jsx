import { useState } from "react";
import "./css/styles.css";
import ProductCard from "./components/ProductCard";
import Products from "./data/products";

function App() {  
  return (
    <div className="container">
      {Products.map(product => {
        return <ProductCard key={product.id} product={product} />
      })}
    </div>
  )
}

export default App
