import React, { useState } from 'react';

function ProductList({ products }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <div className="cart">
        <h2>Cart</h2>
        {cart.map((item, index) => (
          <p key={index}>{item.name}</p>
        ))}
      </div>
    </div>
  );
}

export default ProductList;