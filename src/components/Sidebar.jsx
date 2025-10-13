import React from 'react';

const Sidebar = ({ activeTab, setActiveTab }) => {
  return (
    <div className="w-64 bg-green-500 text-white p-6">
      <h1 className="text-xl font-bold mb-8">Elghousni</h1>
      <nav className="space-y-2">
        <button
          onClick={() => setActiveTab('dashboard')}
          className={`w-full text-left px-4 py-3 rounded ${
            activeTab === 'dashboard' ? 'bg-green-600' : 'hover:bg-green-600'
          }`}
        >
          Dashboard
        </button>
        <button
          onClick={() => setActiveTab('orders')}
          className={`w-full text-left px-4 py-3 rounded ${
            activeTab === 'orders' ? 'bg-green-600' : 'hover:bg-green-600'
          }`}
        >
          Orders
        </button>
        <button
          onClick={() => setActiveTab('products')}
          className={`w-full text-left px-4 py-3 rounded ${
            activeTab === 'products' ? 'bg-green-600' : 'hover:bg-green-600'
          }`}
        >
          Products
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;