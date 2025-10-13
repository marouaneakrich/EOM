import React from 'react';
import {useState,useEffect} from 'react';


const Dashboard = ({ orders, productsCount, products }) => {const [totalRevenue, settotalRevenue] = useState(0);
  const getTotal = (items) => {
 try {
   let sum = 0;

  items.forEach(item => {
    const product = products.find(p => p.id === item.productId);
    if (product) {
      sum += product.price * item.quantity;
    }
  });

  return sum;
 } catch (error) {
  console.log(error)
 }
}

useEffect(() => {
  const gettotal = orders.reduce(function(sum, order) {
    return sum + getTotal(order.items);
  }, 0);
  settotalRevenue(gettotal);
},[] )

  return (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(3, 1fr)', 
      gap: '24px' 
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '24px',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <h3 style={{ color: '#6b7280', marginBottom: '8px' }}>Total Orders</h3>
        <p style={{ fontSize: '36px', fontWeight: 'bold' }}>{orders.length}</p>
      </div>
      <div style={{
        backgroundColor: 'white',
        padding: '24px',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <h3 style={{ color: '#6b7280', marginBottom: '8px' }}>Products</h3>
        <p style={{ fontSize: '36px', fontWeight: 'bold' }}>{productsCount}</p>
      </div>
      <div style={{
        backgroundColor: 'white',
        padding: '24px',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <h3 style={{ color: '#6b7280', marginBottom: '8px' }}>Revenue</h3>
        <p style={{ fontSize: '36px', fontWeight: 'bold' }}>{totalRevenue} </p>
      </div>
    </div>
  );
};

export default Dashboard;