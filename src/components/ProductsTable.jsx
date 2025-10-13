import React from 'react';

const ProductsTable = ({ products }) => {
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
          </tr>
        </thead>
        <tbody>
          {products.map((p, i) => (
            <tr 
              key={p.id} 
              style={{ 
                borderBottom: '1px solid #e5e7eb',
                cursor: 'pointer'
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;