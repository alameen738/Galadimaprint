import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

const products = [
  { id: 1, name: 'Double A Ream (A4)', image: '/images/Double A Ream.jpg', description: 'High-quality Double A A4 paper for office use.', category: 'Papers' },
  { id: 2, name: 'Double A Ream (A3)', image: '/images/Double_A-A3.png', description: 'High-quality Double A A3 paper for larger prints.', category: 'Papers' },
  { id: 3, name: 'Double A Paper (Webp)', image: '/images/Double A.webp', description: 'High-quality Double A paper in Webp format for professional use.', category: 'Papers' },
  { id: 4, name: 'PPC Paper', image: '/images/ppcpaper.jpg', description: 'Affordable PPC paper for printing and copying.', category: 'Papers' },
  { id: 5, name: 'Untitled Paper', image: '/images/[800]-Untitled-2_11.png', description: 'Special untitled paper for office documentation.', category: 'Papers' },
  { id: 6, name: 'Bizhub C203', image: '/images/bizhub_c203.jpg', description: 'Konica Minolta Bizhub C203 Digital Imaging System.', category: 'Printers' },
  { id: 7, name: 'C42-1', image: '/images/c42-1-350x420.jpg', description: 'High-quality color printer for large format printing.', category: 'Printers' },
  { id: 8, name: 'Bizhub C3350', image: '/images/C3350.jpg', description: 'Konica Minolta Bizhub C3350 Professional Printer.', category: 'Printers' },
  { id: 9, name: 'Bizhub C3351', image: '/images/KONICA-MINOLTA-BIZUB-C3351.jpg', description: 'Advanced Konica Minolta Bizhub C3351 Digital Printer.', category: 'Printers' },
  { id: 10, name: 'Printing Machine', image: '/images/printing-scaled-1.jpg', description: 'Advanced printing machine for industrial-level production.', category: 'Printers' },
  { id: 11, name: 'Artcard', image: '/images/Artcard.jpeg', description: 'High-quality Artcard paper for professional use.', category: 'Papers' },
  { id: 12, name: 'Cartridges 79A', image: '/images/79A.png', description: 'HP 79A high-quality toner cartridge for professional printing.', category: 'Cartridges' },
  { id: 13, name: 'Cartridges 83A', image: '/images/83 A.jpeg', description: 'HP 83A reliable black toner for crisp printing.', category: 'Cartridges' },
  { id: 14, name: 'Cartridges 85A', image: '/images/85A.jpeg', description: 'HP 85A toner cartridge for high-quality printing.', category: 'Cartridges' },
  { id: 15, name: 'Envelope (1)', image: '/images/61eonFzaGML._AC_UF894,1000_QL80_.jpg', description: 'High-quality envelope for secure document storage.', category: 'Envelopes' },
  { id: 16, name: 'Envelope (2)', image: '/images/61k+9ricB3L._AC_UF1000,1000_QL80_.jpg', description: 'Professional-grade envelope for business communication.', category: 'Envelopes' },
  { id: 17, name: 'Envelope (3)', image: '/images/88315fc91743d9368c1592249283c208.jpg', description: 'Durable envelope for everyday office use.', category: 'Envelopes' },
  { id: 18, name: 'Envelope (4)', image: '/images/images.jpeg', description: 'Stylish envelope for special correspondence.', category: 'Envelopes' },
  { id: 19, name: 'Cutter', image: '/images/cutter.jpg', description: 'Durable paper cutter for precise cutting tasks.', category: 'Others' },
  { id: 20, name: 'Lamination Machine', image: '/images/Lamination.jpg', description: 'Lamination machine for preserving documents.', category: 'Others' },
];

function ProductList({ filteredProducts }) {
  return (
    <div className="product-grid">
      {filteredProducts.map(product => (
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

function Home() {
  return <h2>Welcome to GaladimaPrint!</h2>;
}

function LoginPage() {
  return <h2>Login Form</h2>;
}

function SignUpPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-up logic here
    console.log('Sign Up:', { name, email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Sign Up</button>
    </form>
  );
}

function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Our Products</h2>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <ProductList filteredProducts={filteredProducts} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src="/images/Logo.png" alt="GaladimaPrint Logo" className="logo" />
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/cart">Cart</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">Sign Up</Link></li>
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Routes>
        </main>

        <footer>
          <p>&copy; 2024 GaladimaPrint. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;