import React, { useState } from 'react';


const ProductsTable = ({ products, onDeletePro, onUpdateProduct }) => {
const [productToEdit, setProductToEdit] = useState(null); 
const [editName, setEditName] = useState('');
const [editPrice, setEditPrice] = useState('');

const editProduct = (product) => {
    setProductToEdit(product);
    setEditName(product.name);
    setEditPrice(product.price);
  };

    const handleSaveEdit = () => {
    const newPrice = parseFloat(editPrice);

    if (!editName || isNaN(newPrice) || newPrice <= 0) {
        alert('Please enter a valid name and price.');
        return;
    }

    const updatedProduct = {
      ...productToEdit,
      name: editName,
      price: newPrice,
    };
    
    onUpdateProduct(updatedProduct); 
    setProductToEdit(null); 
  };

  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}>

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead style={{ borderBottom: '1px solid #e5e7eb' }}>
          <tr>
            <th style={{ textAlign: 'left', padding: '16px' }}>Product</th>
            <th style={{ textAlign: 'left', padding: '16px' }}>Status</th>
            <th style={{ textAlign: 'left', padding: '16px' }}>Price</th>
            <th style={{ textAlign: 'center', padding: '16px' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p, i) => (
            <tr
              key={p.id}
              style={{
                borderBottom: '1px solid #e5e7eb',
                cursor: 'default'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
            >
              <td style={{ padding: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '12px',
                    height: '12px',
                    backgroundColor: '#ef4444',
                    borderRadius: '2px'
                  }}></div>
                  <span>{p.name}</span>
                </div>
              </td>
              <td style={{ padding: '16px' }}>
                <span style={{
                  padding: '4px 12px',
                  backgroundColor: '#dcfce7',
                  color: '#166534',
                  borderRadius: '9999px',
                  fontSize: '14px'
                }}>
                  Active
                </span>
              </td>
              <td style={{ padding: '16px', color: '#6b7280' }}>
                {p.price} MAD
              </td>
              <td style={{ padding: '16px', textAlign: 'center', display: 'flex', gap: '8px', justifyContent: 'center' }}>
              <button
                onClick={() => editProduct(p)}
                style={{
                  padding: '8px',
                  border: 'none',
                  borderRadius: '4px',
                  backgroundColor: 'transparent',
                  cursor: 'pointer',
                  color: '#2563eb'
                }}
              >
                ✏️
              </button>
                <button
                  onClick={() => onDeletePro(p.id)}
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    {productToEdit && (
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
            zIndex: 100 
        }}
        onClick={() => setProductToEdit(null)} 
    >
        <div 
            style={{
                backgroundColor: 'white',
                borderRadius: '8px',
                maxWidth: '500px',
                width: '100%',
                padding: '32px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
            }}
            onClick={e => e.stopPropagation()} 
        >
            <h2 style={{ marginBottom: '24px', fontSize: '24px' }}>
                Edit: {productToEdit.name}
            </h2>

            {/* Product Name Input */}
            <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                    Product Name
                </label>
                <input
                    type="text"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '1px solid #d1d5db',
                        borderRadius: '8px',
                        fontSize: '16px'
                    }}
                />
            </div>

            {/* Price Input */}
            <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                    Price (MAD)
                </label>
                <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={editPrice}
                    onChange={(e) => setEditPrice(e.target.value)}
                    style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '1px solid #d1d5db',
                        borderRadius: '8px',
                        fontSize: '16px'
                    }}
                />
            </div>

            {/* Buttons */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
                <button
                    onClick={() => setProductToEdit(null)}
                    style={{
                        backgroundColor: '#f3f4f6',
                        color: '#374151',
                        padding: '12px 24px',
                        borderRadius: '8px',
                        border: 'none',
                        cursor: 'pointer',
                        fontWeight: '500'
                    }}
                >
                    Cancel
                </button>
                <button
                    onClick={handleSaveEdit}
                    style={{
                        backgroundColor: '#2563eb', 
                        color: 'white',
                        padding: '12px 24px',
                        borderRadius: '8px',
                        fontWeight: '500',
                        border: 'none',
                        cursor: 'pointer'
                    }}
                >
                    Save Changes
                </button>
            </div>
        </div>
    </div>
)}
    </div>
  );
};


export default ProductsTable;