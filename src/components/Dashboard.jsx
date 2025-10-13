import React, { useState, useEffect } from 'react';

const Dashboard = ({ orders, productsCount, products , totalRevenue}) => {

 
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '24px'
      }}
    >
      <div
        style={{
          backgroundColor: 'white',
          padding: '24px',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}
      >
        <h3 style={{ color: '#6b7280', marginBottom: '8px' }}>Total Orders</h3>
        <p style={{ fontSize: '36px', fontWeight: 'bold' }}>{orders.length}</p>
      </div>

      <div
        style={{
          backgroundColor: 'white',
          padding: '24px',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}
      >
        <h3 style={{ color: '#6b7280', marginBottom: '8px' }}>Products</h3>
        <p style={{ fontSize: '36px', fontWeight: 'bold' }}>{productsCount}</p>
      </div>

      <div
        style={{
          backgroundColor: 'white',
          padding: '24px',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}
      >
        <h3 style={{ color: '#6b7280', marginBottom: '8px' }}>Revenue</h3>
        <p style={{ fontSize: '36px', fontWeight: 'bold' }}>
          {totalRevenue.toFixed(2)} MAD
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
