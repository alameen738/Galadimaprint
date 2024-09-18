import React from 'react';
import './App.css';

const products = [
  { id: 1, name: 'Double A Ream (A4)', image: '/images/Double A Ream.jpg', description: 'High-quality Double A A4 paper for office use.' },
  { id: 2, name: 'Double A Ream (A3)', image: '/images/Double_A-A3.png', description: 'High-quality Double A A3 paper for larger prints.' },
  { id: 3, name: 'PPC Paper', image: '/images/ppcpaper.jpg', description: 'Affordable PPC paper for printing and copying.' },
  { id: 4, name: 'Bizhub C203', image: '/images/Di/bizhub_c203.jpg', description: 'Konica Minolta Bizhub C203 Digital Imaging System.' },
  { id: 5, name: 'C42-1', image: '/images/Di/c42-1-350x420.jpg', description: 'High-quality color printer for large format printing.' },
  { id: 6, name: 'Bizhub C3350', image: '/images/Di/C3350.jpg', description: 'Konica Minolta Bizhub C3350 Professional Printer.' },
  { id: 7, name: 'Bizhub C3351', image: '/images/Di/KONICA-MINOLTA-BIZUB-C3351.jpg', description: 'Advanced Konica Minolta Bizhub C3351 Digital Printer.' },
  { id: 8, name: 'Printing Machine', image: '/images/Di/printing-scaled-1.jpg', description: 'Advanced printing machine for industrial-level production.' },
];

function ProductList() {
  return (
    <div className="product-grid">
      {products.map(product => (
        <div key={product.id} className="product">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Galadima Printing Press</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/cart">Cart</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Register</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="product-list">
          <h2>Our Products</h2>
          <ProductList />
        </section>
      </main>

      <footer>
        <p>&copy; 2024 GaladimaPrint. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
