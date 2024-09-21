import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductDetail = ({ match }) => {
  const [product, setProduct] = useState(null);
  
  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get(`http://localhost:5000/api/products/${match.params.id}`);
      setProduct(response.data);
    };

    fetchProduct();
  }, [match.params.id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-detail">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
