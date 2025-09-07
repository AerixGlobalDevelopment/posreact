import React from 'react'
import { Search, BarChart3, Percent, Hash, Tag, Calculator, Save, DollarSign, CreditCard, Menu } from 'lucide-react'
import comment from '../icons/comment.png'
import newSale from '../icons/plus.png'
import refund from '../icons/refund.png'
import drawer from '../icons/drawer.png';
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <button className="header-btn">
          <Search size={20} />
          <span>Search</span>
        </button>
        <button className="header-btn">
          <BarChart3 size={20} />
          <span>Transfer</span>
        </button>
        <button className="header-btn">
          <Percent size={20} />
          <span>Discount</span>
        </button>
        <button className="header-btn">
          <img src={comment} alt="Comment" width={20} height={20} />
          <span>Comment</span>
        </button>
        <button className="header-btn">
          <img src={newSale} alt="Comment" width={20} height={20} />
          <span>New sale</span>
        </button>
        <button className="header-btn">
          <img src={refund} alt="Comment" width={20} height={20} />
          <span>Refund</span>
        </button>
        <button className="header-btn">
          <img src={drawer} alt="Comment" width={20} height={20} />
          <span>Cash drawer</span>
        </button>
        <button className="header-btn">         
          <span className="shortcut">F9</span>
          <span className="notification-badge">3</span>
          <span>Save sale</span>
        </button>
        <button className="header-btn">
          <span className="shortcut">F10</span>
          <span>Payment</span>
        </button>
        <button className="header-btn">
          <span className="shortcut">F11</span>
          <span>Cash</span>
        </button>
      </div>
      
      <div className="header-right">
        
        <button className="header-btn menu-btn">
          <Menu size={20} />
        </button>
      </div>
    </header>
  )
}

export default Header
