import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import OrderForm from './components/OrderForm';
import ProductsTable from './components/ProductsTable'; 
import OrdersList from './components/OrdersList';
import OrderModal from './components/OrderModal';
import AddProductForm from './components/AddProductForm';
import { PRODUCTS } from './data/products';
import './App.css';
import { create } from 'zustand'
import { useShallow } from 'zustand/react/shallow'




function App() {
  const [activeTab, setActiveTab] = useState('orders');
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState(PRODUCTS);
  const [viewOrder, setViewOrder] = useState(null);

  const addOrder = (orderData) => {
    const newOrder = {
      id: Date.now(),
      ...orderData,
      status: 'En attente',
      date: new Date().toISOString()
    };
    setOrders(prev => [newOrder, ...prev]);
  };

  const addProduct = (productData) => {
    const newProduct = {
      id: Date.now(),
      ...productData
    };
    setProducts(prev => [...prev, newProduct]);
    alert('✅ Product added successfully!');
  };

  const deleteOrder = (id) => {
    if (window.confirm('Supprimer cette commande?')) {
      setOrders(prev => prev.filter(o => o.id !== id));
    }
  };

  const changeStatus = (id, status) => {
    setOrders(prev => prev.map(o => o.id === id ? { ...o, status } : o));
    if (viewOrder && viewOrder.id === id) {
      setViewOrder({ ...viewOrder, status });
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="flex-1 overflow-auto">
        {}
        <div className="bg-white border-b">
          <div className="px-8 py-4">
            <div className="flex gap-4">
              <button
                onClick={() => setActiveTab('orders')}
                className={`px-6 py-2 rounded-t-lg ${
                  activeTab === 'orders' ? 'bg-white border border-b-0' : 'bg-gray-100'
                }`}
              >
                Total Orders
              </button>
              <button
                onClick={() => setActiveTab('new')}
                className={`px-6 py-2 rounded-t-lg ${
                  activeTab === 'new' ? 'bg-white border border-b-0' : 'bg-gray-100'
                }`}
              >
                New Order
              </button>
              <button
                onClick={() => setActiveTab('addProduct')}
                className={`px-6 py-2 rounded-t-lg ${
                  activeTab === 'addProduct' ? 'bg-white border border-b-0' : 'bg-gray-100'
                }`}
              >
                Add Products
              </button>
            </div>
          </div>
        </div>

        {}
        <div className="p-8">
          {activeTab === 'dashboard' && (
            <Dashboard orders={orders} productsCount={products.length} />
          )}

          {activeTab === 'new' && (
            <OrderForm 
              onAddOrder={addOrder} 
              onTabChange={setActiveTab}
              products={products}
            />
          )}

          {activeTab === 'addProduct' && (
            <AddProductForm onAddProduct={addProduct} />
          )}

          {activeTab === 'products' && (
            <ProductsTable products={products} />
          )}

          {activeTab === 'orders' && (
            <OrdersList 
              orders={orders} 
                            products={products}

              onViewOrder={setViewOrder}
              onDeleteOrder={deleteOrder}
            />
          )}
        </div>
      </div>

      <OrderModal 
        order={viewOrder}
        onClose={() => setViewOrder(null)}
        onStatusChange={changeStatus}
      />
    </div>
  );
}

export default App;