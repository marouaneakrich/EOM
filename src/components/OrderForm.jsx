import React, { useState } from 'react';

const OrderForm = ({ onAddOrder, onTabChange, products }) => {
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [quantities, setQuantities] = useState({});

  const handleQuantity = (id, qty) => {
    setQuantities(prev => ({ ...prev, [id]: parseInt(qty) || 0 }));
  };

  const handleSubmit = () => {
    const items = Object.entries(quantities)
      .filter(([_, qty]) => qty > 0)
      .map(([id, qty]) => ({ productId: parseInt(id), quantity: qty }));

    if (!customerName || !phone || items.length === 0) {
      alert('Veuillez remplir tous les champs');
      return;
    }

    onAddOrder({ customerName, phone, items });
    setCustomerName('');
    setPhone('');
    setQuantities({});
    onTabChange('orders');
  };

  return (
    <div style={{ maxWidth: '600px' }}>
      <div style={{ 
        backgroundColor: 'white', 
        borderRadius: '8px', 
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)', 
        padding: '32px' 
      }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          marginBottom: '32px' 
        }}>
          <button
            onClick={handleSubmit}
            style={{
              width: '96px',
              height: '96px',
              borderRadius: '8px',
              border: '2px dashed #d1d5db',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '48px',
              color: '#9ca3af',
              cursor: 'pointer',
              backgroundColor: 'white'
            }}
          >
            +
          </button>
        </div>
        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '24px' }}>
          New Order
        </h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            placeholder="Customer Name"
            style={{
              width: '100%',
              padding: '12px 16px',
              border: '1px solid #d1d5db',
              borderRadius: '8px',
              fontSize: '16px'
            }}
          />
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone"
            style={{
              width: '100%',
              padding: '12px 16px',
              border: '1px solid #d1d5db',
              borderRadius: '8px',
              fontSize: '16px'
            }}
          />
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ fontWeight: '500' }}>Select Products:</label>
            {products.map(p => (
              <div 
                key={p.id} 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '16px', 
                  padding: '12px', 
                  border: '1px solid #d1d5db', 
                  borderRadius: '8px' 
                }}
              >
                <span style={{ flex: 1 }}>{p.name} - {p.price} MAD</span>
                <input
                  type="number"
                  min="0"
                  value={quantities[p.id] || 0}
                  onChange={(e) => handleQuantity(p.id, e.target.value)}
                  style={{
                    width: '80px',
                    padding: '4px 8px',
                    border: '1px solid #d1d5db',
                    borderRadius: '4px',
                    textAlign: 'center'
                  }}
                />
              </div>
            ))}
          </div>

          <button
            onClick={handleSubmit}
            style={{
              width: '100%',
              backgroundColor: '#22c55e',
              color: 'white',
              padding: '12px',
              borderRadius: '8px',
              fontWeight: '500',
              border: 'none',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            Create Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;