import React from 'react';

const OrderModal = ({ order, onClose, onStatusChange, products }) => {
  if (!order) return null;

  const getTotal = (items) => {
    try {
      if (!products || !Array.isArray(products)) {
        return 0;
      }
      let sum = 0;
      items.forEach(item => {
        const product = products.find(p => String(p.id) === String(item.productId));
        if (product) {
          sum += Number(product.price) * Number(item.quantity);
        }
      });
      return sum;
    } catch (error) {
      console.log(error);
      return 0;
    }
  };


  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        zIndex: 50
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '8px',
          maxWidth: '600px',
          width: '100%',
          padding: '32px'
        }}
        onClick={e => e.stopPropagation()}
      >
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '24px'
        }}>
          <div>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>Order Details</h2>
            <p style={{ color: '#6b7280' }}>#{order.id}</p>
          </div>
          <button
            onClick={onClose}
            style={{
              border: 'none',
              backgroundColor: 'transparent',
              fontSize: '24px',
              cursor: 'pointer'
            }}
          >
            ✕
          </button>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div>
              <p style={{ fontSize: '14px', color: '#6b7280' }}>Customer</p>
              <p style={{ fontWeight: 'bold' }}>{order.customerName}</p>
            </div>
            <div>
              <p style={{ fontSize: '14px', color: '#6b7280' }}>Phone</p>
              <p style={{ fontWeight: 'bold' }}>{order.phone}</p>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '16px' }}>
          <h3 style={{ fontWeight: 'bold', marginBottom: '16px' }}>Products</h3>
          <div style={{
            borderTop: '1px solid #e5e7eb',
            marginTop: '16px',
            paddingTop: '16px',
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '20px',
            fontWeight: 'bold'
          }}>
            <span>Total</span>
            <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#22c55e' }}>
              {getTotal(order.items)} MAD</span>
          </div>
        </div>

        <select
          value={order.status}
          onChange={(e) => onStatusChange(order.id, e.target.value)}
          style={{
            width: '100%',
            marginTop: '24px',
            padding: '8px 16px',
            border: '1px solid #d1d5db',
            borderRadius: '8px',
            fontSize: '16px'
          }}
        >
          <option>En attente</option>
          <option>Préparé</option>
          <option>Livré</option>
        </select>
      </div>
    </div>
  );
};

export default OrderModal;