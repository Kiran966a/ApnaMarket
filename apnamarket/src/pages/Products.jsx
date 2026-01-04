import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import "./Products.css";

function Products() {
  return (
    <div className="products-page">
      <div className="products-header">
        <h1>Explore Products</h1>
        <p>Compare prices from multiple sellers and choose the best deal.</p>
      </div>

      <div className="products-grid">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}

export default Products;
