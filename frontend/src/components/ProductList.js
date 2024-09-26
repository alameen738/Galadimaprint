import React from 'react';
import { Link } from 'react-router-dom';

function ProductList({ products, isLoggedIn }) {
  return (
    <div className="product-grid">
      {products.map(product => (
        <div className="product" key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          {isLoggedIn ? (
            <Link to="/checkout">
              <button>Add to Cart</button>
            </Link>
          ) : (
            <p>Please log in to purchase.</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default ProductList;