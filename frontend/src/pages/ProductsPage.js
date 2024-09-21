import React, { useState } from 'react';
import ProductList from '../components/ProductList';

const products = [
  // Your product list here
];

function ProductsPage({ cartItems, setCartItems }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div>
      <h2>Products</h2>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="All">All</option>
          <option value="Papers">Papers</option>
          <option value="Printers">Printers</option>
          <option value="Cartridges">Cartridges</option>
          <option value="Envelopes">Envelopes</option>
          <option value="Others">Others</option>
        </select>
      </div>
      <ProductList filteredProducts={filteredProducts} addToCart={addToCart} />
    </div>
  );
}

export default ProductsPage;
