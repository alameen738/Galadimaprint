import React from 'react';

function CartPage({ cartItems }) {
  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - {item.category}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CartPage;
