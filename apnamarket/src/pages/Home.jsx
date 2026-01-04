import { Link } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import "./Home.css";

function Home() {
  return (
    <div className="amazon-home">
      {/* TOP BANNER */}
      <div className="top-banner">
        <h2>Shop smarter with Apna Market</h2>
        <p>Compare prices from multiple sellers & track your orders easily</p>
        <Link to="/products" className="shop-btn">
          Start Shopping
        </Link>
      </div>

      {/* CATEGORY STRIP */}
      <div className="category-strip">
        <div className="category">🎧 Electronics</div>
        <div className="category">⌚ Wearables</div>
        <div className="category">🎮 Gaming</div>
        <div className="category">🎒 Accessories</div>
        <div className="category">⚡ Power & Charging</div>
      </div>

      {/* PRODUCT ROW */}
      <div className="home-products">
        <h3>Recommended for you</h3>

        <div className="product-row">
          {products.slice(0, 5).map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
