import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('http://localhost:5000/api/products');
      setProducts(response.data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product._id} className="product">
          <h3>{product.name}</h3>
          <img src={product.image} alt={product.name} />
          <p>{product.description}</p>
          <Link to={`/product/${product._id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default Home;

