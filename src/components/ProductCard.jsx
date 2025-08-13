import "../css/ProductCard.css";

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
                     <button>Buy Now</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCard;
