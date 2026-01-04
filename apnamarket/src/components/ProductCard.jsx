import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      {/* IMAGE WRAPPER */}
      <div className="image-wrapper">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="card-content">
        <h3>{product.name}</h3>

        <p className="price">₹{product.price}</p>
        <p className="seller">Seller: {product.seller}</p>
        <p className="rating">
          ⭐ {product.rating} ({product.reviews})
        </p>

        <Link to={`/product/${product.id}`} className="view-btn">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
