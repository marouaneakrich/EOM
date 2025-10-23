import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import toast, { Toaster } from 'react-hot-toast';
import ConfirmToast from './components/ConfirmToast';
import Dashboard from './components/Dashboard';
import OrderForm from './components/OrderForm';
import ProductsTable from './components/ProductsTable';
import OrdersList from './components/OrdersList';
import OrderModal from './components/OrderModal';
import AddProductForm from './components/AddProductForm';
import { PRODUCTS } from './data/products';
import './App.css';



function App() {
      const [activeTab, setActiveTab] = useState('orders');
      const [orders, setOrders] = useState([]);
      const [products, setProducts] = useState(PRODUCTS);
      const [viewOrder, setViewOrder] = useState(null);
      const [totalRevenue, setTotalRevenue] = useState(0);

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
                  console.log(error);
                  return 0;
            }
      };

      useEffect(() => {
            let total = 0;

            orders.forEach(order => {
                  if (order.items && Array.isArray(order.items)) {
                        total += getTotal(order.items);
                  }
            });

            setTotalRevenue(total);
      }, [orders, products]);


      const addOrder = (orderData) => {
            const idMap = {
                  1: 101,
                  2: 102,
                  3: 3,
                  4: 4,
                  5: 5,
                  6: 6,
                  7: 7,
                  8: 8
            };

            const fixedItems = orderData.items.map(item => ({
                  ...item,
                  productId: idMap[item.productId] || item.productId
            }));

            const newOrder = {
                  id: Date.now(),
                  ...orderData,
                  items: fixedItems,
                  status: 'En attente',
                  date: new Date().toISOString()
            };

            setOrders(prev => [newOrder, ...prev]);
            toast.success(' Order added successfully!');

      };


      const addProduct = (productData) => {
            const newProduct = {
                  id: Date.now(),
                  ...productData
            };
            setProducts(prev => [...prev, newProduct]);
            toast.success(' Product added successfully!');
      };

const performDeleteProduct = (id) => {
            setProducts(prev => prev.filter(p => p.id !== id));
            toast.success('Product deleted successfully!');
      };

      const deleteProduct= (id) => {
            toast.custom(
                  (t) => (
                        <ConfirmToast
                              toastId={t.id}
                              message="Supprimer cette commande ?"
                              onConfirm={() => performDeleteProduct(id)}
                              onCancel={() => toast.dismiss(t.id)}
                        />
                  ),
                  {
                        duration: Infinity,
                        position: "top-center",
                  }
            );
      };
      const updateProduct = (updatedProduct) => {
            setProducts(prevProducts => prevProducts.map(p =>
                  p.id === updatedProduct.id ? updatedProduct : p
            ));
            toast.success(`Product "${updatedProduct.name}" updated successfully!`);
      };

      const performDeleteOrder = (id) => {
            setOrders(prev => prev.filter(o => o.id !== id));
            toast.success('Order deleted successfully!');
      };

      const deleteOrder = (id) => {
            toast.custom(
                  (t) => (
                        <ConfirmToast
                              toastId={t.id}
                              message="Supprimer cette commande ?"
                              onConfirm={() => performDeleteOrder(id)}
                              onCancel={() => toast.dismiss(t.id)}
                        />
                  ),
                  {
                        duration: Infinity,
                        position: "top-center",
                  }
            );
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
                        { }
                        <div className="bg-white border-b">
                              <div className="px-8 py-4">
                                    <div className="flex gap-4">
                                          <button
                                                onClick={() => setActiveTab('orders')}
                                                className={`px-6 py-2 rounded-t-lg ${activeTab === 'orders' ? 'bg-white border border-b-0' : 'bg-gray-100'
                                                      }`}
                                          >
                                                Total Orders
                                          </button>
                                          <button
                                                onClick={() => setActiveTab('new')}
                                                className={`px-6 py-2 rounded-t-lg ${activeTab === 'new' ? 'bg-white border border-b-0' : 'bg-gray-100'
                                                      }`}
                                          >
                                                New Order
                                          </button>
                                          <button
                                                onClick={() => setActiveTab('addProduct')}
                                                className={`px-6 py-2 rounded-t-lg ${activeTab === 'addProduct' ? 'bg-white border border-b-0' : 'bg-gray-100'
                                                      }`}
                                          >
                                                Add Products
                                          </button>
                                    </div>
                              </div>
                        </div>

                        { }
                        <div className="p-8">
                              {activeTab === 'dashboard' && (
                                    <Dashboard orders={orders} productsCount={products.length} totalRevenue={totalRevenue} />
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
                                    <ProductsTable products={products}
                                          onDeletePro={deleteProduct}
                                          onUpdateProduct={updateProduct} />

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
                        <Toaster position="bottom-right" reverseOrder={false} />
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