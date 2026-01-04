import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="nav">
      <div className="nav-left">
        <Link to="/" className="logo">
          Smart<span>Kart</span>
        </Link>
      </div>

      <div className="nav-center">
        <input
          type="text"
          placeholder="Search products"
          disabled
        />
      </div>

      <div className="nav-right">
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </header>
  );
}

export default Navbar;
