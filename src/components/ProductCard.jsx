import "../css/ProductCard.css";

function ProductCard(props) {
  return (
    <div className="card">
        <div className="card-wrapper">
            <div className="card-right">
                <div className="img-wrapper">
                    <img src={props.Product.url} alt={props.Product.name} />
                </div>
            </div>
            <div className="card-left">
                <div className="info-wrapper">
                    <div className="product-name">{props.Product.name}</div>
                    <div className="product-description">{props.Product.description}</div>
                    <div className="product-price">&#8369; {props.Product.price.toLocaleString()}</div>
                     <button>Buy Now</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCard;
