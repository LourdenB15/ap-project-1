import "../css/ProductCard.css";

function ProductCard({Product}) {
  return (
    <div className="card">
        <div className="card-wrapper">
            <div className="card-right">
                <div className="img-wrapper">
                    <img src={Product.url} alt={Product.name} />
                </div>
            </div>
            <div className="card-left">
                <div className="info-wrapper">
                    <div className="product-name">{Product.name}</div>
                    <div className="product-description">{Product.description}</div>
                    <div className="product-price">&#8369; {Product.price.toLocaleString()}</div>
                     <button>Buy Now</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCard;
