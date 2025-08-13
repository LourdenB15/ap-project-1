import "../css/ProductCard.css";
import Button from "./Button";

function ProductCard({product}) {
  return (
    <div className="card">
        <div className="card-wrapper">
            <div className="card-right">
                <div className="img-wrapper">
                    <img src={product.url} alt={product.name} />
                </div>
            </div>
            <div className="card-left">
                <div className="info-wrapper">
                    <div className="product-name">{product.name}</div>
                    <div className="product-description">{product.description}</div>
                    <div className="product-price">&#8369; {product.price.toLocaleString()}</div>
                    <Button name={product.name}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCard;
