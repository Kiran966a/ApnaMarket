import Tracking from "../components/Tracking";
import "./Cart.css";

function Cart() {
  return (
    <div className="cart-page">
      <div className="cart-card">
        <h1>Your Order</h1>
        <p className="success-text">
          🎉 Order placed successfully! Track your delivery status below.
        </p>

        <Tracking />
      </div>
    </div>
  );
}

export default Cart;
