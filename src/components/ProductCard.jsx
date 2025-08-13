import "../css/ProductCard.css";

function ProductCard() {
  return (
    <div className="card">
        <div className="card-wrapper">
            <div className="card-right">
                <div className="img-wrapper">
                    <img src="https://m.media-amazon.com/images/I/71rT0DXY35L._AC_SL1500_.jpg" alt="Sapphire PULSE Radeon RX 9070 (Model 11349-03-20G)" />
                </div>
            </div>
            <div className="card-left">
                <div className="info-wrapper">
                    <div className="product-name">Sapphire PULSE Radeon RX 9070 (Model 11349-03-20G)</div>
                    <div className="product-description">The Sapphire PULSE Radeon RX 9070 (Model 11349-03-20G) is a powerful, visually sophisticated gaming graphics card built on AMD’s latest RDNA 4 architecture, delivering a balance of performance, efficiency, and visual finesse ideal for modern gaming and creative workloads.</div>
                    <div className="product-price">$758.43</div>
                     <button>Buy Now</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCard
