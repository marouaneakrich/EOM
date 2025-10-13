import React from "react";

function OrderSummary({ quantities, products }) {
  const total = products.reduce((sum, p) => {
    const qty = quantities[p.id] || 0;
    return sum + qty * p.price;
  }, 0);

  return (
    <div className="order-summary">
      <h3>Total: {total} MAD</h3>
    </div>
  );
}

export default OrderSummary;
