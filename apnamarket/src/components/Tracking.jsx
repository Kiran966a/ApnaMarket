function Tracking() {
  const steps = [
    "Order Placed",
    "Packed",
    "Shipped",
    "Out for Delivery",
    "Delivered"
  ];

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Order Tracking</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {steps.map((step, index) => (
          <li key={index} style={{ marginBottom: "8px" }}>
            ✅ {step}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tracking;
