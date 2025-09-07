import React from 'react';
import './ProductGrid.css';
import backward from '../icons/backward-arrow.png';
import next from '../icons/backward-track.png';
import barcode from '../icons/barcode.png';
import asterisk from '../icons/asterisk.png';
import keyboard from '../icons/keyboard.png';
import search from '../icons/search.png';
import tag from '../icons/tag.png';
import hash from '../icons/hash.png';
import back from '../icons/back.png';
import homes from '../icons/homes.png';
import nexts from '../icons/nexts.png';
import forwards from '../icons/forwards.png';

const ProductGrid = ({ products, onAddToCart, sidebarCollapsed }) => {
  return (
    <main className={`product-grid-container ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
      
      {/* Toolbar row: controls + search */}
      <div className="toolbar">
  <div className="sidebar-controls">
    <button className="nav-btn">
      <img src={asterisk} alt="asterisk" width={20} height={20} />
    </button>
    <button className="nav-btn">
      <img src={barcode} alt="barcode" width={20} height={20} />
    </button>
    <button className="nav-btn">
      <img src={hash} alt="hash" width={20} height={20} />
    </button>
    <button className="nav-btn">
      <img src={tag} alt="tag" width={20} height={20} />
    </button>
  </div>

  <div className="search-wrapper">
    <input
      type="text"
      placeholder="Search products by name"
      className="search-input"
    />
    <div className="search-icons">
      <img src={search} alt="search" width={20} height={20} />
      <img src={keyboard} alt="keyboard" width={20} height={20} />
    </div>
  </div>
</div>



      {/* Product grid */}
      <div className="product-grid">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => onAddToCart(product)}
          >
            <div className="product-name">{product.name}</div>
            <div className="product-price">{product.price.toFixed(2)}</div>
          </div>
        ))}
      </div>

      {/* Pagination fixed at bottom */}
      <div className="pagination">
        <span>Page 1 / 1</span>
        <div className="pagination-controls">
          <button>
            <img src={homes} alt="home" width={20} height={20} />
          </button>
          <button>
            <img src={back} alt="back" width={20} height={20} />
          </button>
          <button>
            <img src={nexts} alt="next" width={20} height={20} />
          </button>
          <button>
            <img src={forwards} alt="forwards" width={20} height={20} />
          </button>
        </div>
      </div>

    </main>
  );
};

export default ProductGrid;
