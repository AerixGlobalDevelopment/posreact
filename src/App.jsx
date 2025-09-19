import React, { useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import ProductGrid from './components/ProductGrid'
import './App.css'
import RightNav from "./components/RightNav";
import ManagementModal from "./components/ManagementModel.jsx";
import SearchItems from "./components/SearchItems.jsx";
import AddProduct from "./components/AddProduct.jsx";

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product A', code: '2305', price: 100.00, quantity: 2, total: 200.00 },
    { id: 2, name: 'Product B', code: '2305', price: 200.00, quantity: 1, total: 200.00 },
    { id: 3, name: 'Product C', code: '2305', price: 200.00, quantity: 3, total: 600.00 },
    { id: 4, name: 'Product D', code: '2305', price: 200.00, quantity: 1, total: 200.00, isDeleted: true }
  ])

  const products = [
    { id: 1, name: 'Product A', price: 100.00 },
    { id: 2, name: 'Product B', price: 200.00 },
    { id: 3, name: 'Product C', price: 200.00 },
    { id: 4, name: 'Product D', price: 200.00 },
    { id: 5, name: 'Product E', price: 150.00 },
    { id: 6, name: 'Product F', price: 300.00 },
    { id: 7, name: 'Product G', price: 250.00 },
    { id: 8, name: 'Product H', price: 180.00 }
  ]

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed)
  }

   const [sidebarWidth, setSidebarWidth] = useState(250) // default width
  const [isResizing, setIsResizing] = useState(false)

  const startResizing = () => {
    setIsResizing(true)
  }

  const stopResizing = () => {
    setIsResizing(false)
  }

  const handleResizing = (e) => {
    if (isResizing) {
      setSidebarWidth(Math.max(150, e.clientX)) // min width = 150px
    }
  }

  React.useEffect(() => {
    window.addEventListener("mousemove", handleResizing)
    window.addEventListener("mouseup", stopResizing)
    return () => {
      window.removeEventListener("mousemove", handleResizing)
      window.removeEventListener("mouseup", stopResizing)
    }
  })

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id && !item.isDeleted)
    if (existingItem) {
      setCartItems(cartItems.map(item => 
        item.id === product.id && !item.isDeleted
          ? { ...item, quantity: item.quantity + 1, total: (item.quantity + 1) * item.price }
          : item
      ))
    } else {
      const newItem = {
        id: product.id,
        name: product.name,
        code: '2305',
        price: product.price,
        quantity: 1,
        total: product.price,
        isDeleted: false
      }
      setCartItems([...cartItems, newItem])
    }
  }

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      setCartItems(cartItems.filter(item => item.id !== id))
    } else {
      setCartItems(cartItems.map(item => 
        item.id === id 
          ? { ...item, quantity: newQuantity, total: newQuantity * item.price }
          : item
      ))
    }
  }

  const deleteItem = (id) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, isDeleted: true } : item
    ))
  }

  const subtotal = cartItems
    .filter(item => !item.isDeleted)
    .reduce((sum, item) => sum + item.total, 0)
  const tax = subtotal * 0.15
  const total = subtotal + tax

  // const [navCollapsed, setNavCollapsed] = useState(true);
  const [open, setOpen] = useState(false);
  const [managementOpen, setManagementOpen] = useState(false)
  const [searchItemOpen, setSearchItemOpen] = useState(false)
  const [addProductOpen, setAddProductOpen] = useState(false)

  return (
      <div className="app">
        <Header setOpen={() => setOpen(true)} />

        <RightNav
            open={open}
            setOpen={setOpen}
            setManagementOpen={setManagementOpen}
            setSearchItemOpen={setSearchItemOpen}
            setAddProductOpen={setAddProductOpen}
        />

        <div className="main-content" style={{display: "flex"}}>
          <Sidebar
              collapsed={sidebarCollapsed}
              onToggle={toggleSidebar}
              cartItems={cartItems}
              onUpdateQuantity={updateQuantity}
              onDeleteItem={deleteItem}
              subtotal={subtotal}
              tax={tax}
              total={total}
              width={sidebarWidth}
          />

          {managementOpen && (
              <ManagementModal onClose={() => setManagementOpen(false)} />
          )}

          {searchItemOpen && (
                <SearchItems onClose={() => setSearchItemOpen(false)} />
              )}

          {addProductOpen && (
              <AddProduct onClose={() => setAddProductOpen(false)} />
          )}

          <div
              style={{
                width: "5px",
                cursor: "col-resize",
                background: "#494848"
              }}
              onMouseDown={startResizing}
          />
          <ProductGrid
              products={products}
              onAddToCart={addToCart}
              sidebarCollapsed={sidebarCollapsed}
          />
        </div>
      </div>
  )
}

export default App
