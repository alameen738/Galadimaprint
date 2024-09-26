import React from 'react';

function Checkout({ products }) {
  return (
    <div>
      <h2>Checkout</h2>
      <p>Thank you for your purchase!</p>
      <h3>Products:</h3>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
      <h4>Total: {products.length} items</h4>
      <button onClick={() => alert('Proceeding to payment...')}>Proceed to Payment</button>
    </div>
  );
}

export default Checkout;
