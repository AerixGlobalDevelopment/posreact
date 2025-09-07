import React from 'react'
import { X, ChevronLeft, ChevronRight, Trash2, Lock, RotateCcw } from 'lucide-react'
import lock from '../icons/lock.png'
import trash from '../icons/trash.png'
import repeat from '../icons/repeat.png'
import './Sidebar.css'

const Sidebar = ({ 
  collapsed, 
  onToggle, 
  cartItems, 
  onUpdateQuantity, 
  onDeleteItem, 
  subtotal, 
  tax, 
  total,
  width,
  onResizeStart 
}) => {
  const activeItems = cartItems.filter(item => !item.isDeleted)

  return (
    <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}
    style={{ width: collapsed ? "60px" : `${width}px` }}>
      <div className="sidebar-header">
        <button className="toggle-btn" onClick={onToggle}>
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
        {!collapsed && (
          <>
            <button className="delete-btn">
              <X size={16} />
              <span>Delete</span>
            </button>
            <button className="toggle-btn">
              <X size={16} />
              <span>Quantity</span>
            </button>
            <div className="quantity-display">
              
              <span className="quantity-number">1174</span>
            </div>
          </>
        )}
      </div>

      {!collapsed && (
        <>
          
          <div className="cart-items">
            {activeItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="item-info">
                  <div className="item-header">
                    <span className="item-name">{item.name}</span>
                    <span className="item-quantity">{item.quantity}</span>
                  </div>
                  <div className="item-details">
                    <span className="item-code">#{item.id} {item.code}</span>
                    <span className="item-price">{item.price.toFixed(2)}</span>
                    <span className="item-total">{item.total.toFixed(2)}</span>
                  </div>
                </div>
                
              </div>
            ))}

            {cartItems.filter(item => item.isDeleted).map((item) => (
              <div key={`deleted-${item.id}`} className="cart-item deleted">
                <div className="item-info">
                  <div className="item-header">
                    <span className="item-name">{item.name}</span>
                  </div>
                  <div className="item-details">
                    <span className="item-code">#{item.id} {item.code}</span>
                    <span className="item-price">{item.price.toFixed(2)}</span>
                  </div>
                </div>
                <div className="delete-indicator">
                  <Trash2 size={16} />
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="summary-row">
              <span>Subtotal</span>
              <span>{subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Tax</span>
              <span>{tax.toFixed(2)}</span>
            </div>
            <div className="summary-row total-row">
              <span>Total</span>
              <span>{total.toFixed(2)}</span>
            </div>
          </div>

          <div className="sidebar-footer">
            <button className="footer-btn void-btn">
              <img src={trash} alt="trash" width={16} height={16} />
              <span>Void order</span>
            </button>
            <button className="footer-btn lock-btn">
              <img src={lock} alt="lock" width={16} height={16} />
              <span>Lock</span>
            </button>
            <button className="footer-btn repeat-btn">
              <img src={repeat} alt="repeat" width={16} height={16} />
              <span>Repeat</span>
            </button>
          </div>

          
        </>
      )}
      <div 
        className="resize-handle"
        onMouseDown={onResizeStart}
      />
    </aside>
  )
}

export default Sidebar
