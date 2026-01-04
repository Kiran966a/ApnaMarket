import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import "./ProductDetail.css";

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id == id);

  if (!product) {
    return <p className="not-found">Product not found</p>;
  }

  return (
    <div className="detail-page">
      <div className="detail-card">
        <div className="detail-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="detail-content">
          <h1>{product.name}</h1>

          <p className="price">₹{product.price}</p>

          <p className="seller">
            Sold by <span>{product.seller}</span>
          </p>

          <p className="rating">
            ⭐ {product.rating} ({product.reviews} reviews)
          </p>

          <p className="description">{product.description}</p>

          <Link to="/cart" className="add-btn">
            Add to Cart
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
