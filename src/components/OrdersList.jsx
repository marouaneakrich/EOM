import React from 'react';
import { PRODUCTS } from '../data/products';

const OrdersList = ({ orders, onViewOrder, onDeleteOrder }) => {
  const getTotal = (items) => {
    return items.reduce((sum, item) => {
      const product = PRODUCTS.find(p => p.id === item.productId);
      return sum + (product.price * item.quantity);
    }, 0);
  };

  const statusColors = {
    'En attente': { bg: '#fef3c7', color: '#92400e' },
    'Préparé': { bg: '#dbeafe', color: '#1e40af' },
    'Livré': { bg: '#dcfce7', color: '#166534' }
  };

  if (orders.length === 0) {
    return (
      <div style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        padding: '48px',
        textAlign: 'center',
        color: '#6b7280'
      }}>
        No orders yet
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {orders.map(order => (
        <div 
          key={order.id} 
          style={{
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            padding: '24px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '4px' }}>
                {order.customerName}
              </h3>
              <p style={{ fontSize: '14px', color: '#6b7280' }}>{order.phone}</p>
              <p style={{ fontSize: '12px', color: '#9ca3af', marginTop: '4px' }}>
                {new Date(order.date).toLocaleDateString()}
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{
                padding: '4px 12px',
                borderRadius: '9999px',
                fontSize: '14px',
                fontWeight: '500',
                backgroundColor: statusColors[order.status].bg,
                color: statusColors[order.status].color
              }}>
                {order.status}
              </span>
              <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#22c55e' }}>
                {getTotal(order.items)} MAD
              </p>
              <button
                onClick={() => onViewOrder(order)}
                style={{
                  padding: '8px',
                  border: 'none',
                  borderRadius: '4px',
                  backgroundColor: 'transparent',
                  cursor: 'pointer'
                }}
              >
                👁️
              </button>
              <button
                onClick={() => onDeleteOrder(order.id)}
                style={{
                  padding: '8px',
                  border: 'none',
                  borderRadius: '4px',
                  backgroundColor: 'transparent',
                  cursor: 'pointer',
                  color: '#ef4444'
                }}
              >
                🗑️
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrdersList;