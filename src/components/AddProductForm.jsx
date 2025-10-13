import React, { useState } from 'react';

const AddProductForm = ({ onAddProduct }) => {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = () => {
    if (!productName || !price || parseFloat(price) <= 0) {
      alert('Please fill all fields correctly');
      return;
    }

    onAddProduct({
      name: productName,
      price: parseFloat(price)
    });

    setProductName('');
    setPrice('');
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
          Add New Product
        </h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
              Product Name
            </label>
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              placeholder="Ex: Huile d'olive 2L"
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '16px'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
              Price (MAD)
            </label>
            <input
              type="number"
              min="0"
              step="0.01"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Ex: 120"
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '16px'
              }}
            />
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
              fontSize: '16px',
              marginTop: '16px'
            }}
          >
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProductForm;