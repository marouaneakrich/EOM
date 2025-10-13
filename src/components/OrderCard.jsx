import React from "react";
import StatusBadge from "./StatusBadge";

function OrderCard({ order, onChangeStatus, onDelete }) {
  return (
    <div className="order-card">
      <h4>{order.customerName}</h4>
      <p>📞 {order.phone}</p>
      <StatusBadge status={order.status} />

      <ul>
        {order.items.map((item, i) => (
          <li key={i}>
            {item.name} × {item.quantity} = {item.subtotal} MAD
          </li>
        ))}
      </ul>

      <strong>Total: {order.total} MAD</strong>

      <div className="buttons">
        <button onClick={() => onChangeStatus(order.id)}>Next Status</button>
        <button onClick={() => onDelete(order.id)}>Delete</button>
      </div>
    </div>
  );
}

export default OrderCard;
