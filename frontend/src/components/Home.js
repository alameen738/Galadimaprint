import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = ({ isLoggedIn, userProfile, onLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <Link to="/" className="logo">
          <img src="/images/Logo.png" alt="GaladimaPrint" />
        </Link>

        {/* Navigation Links */}
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link>
          <Link to="/products" className={location.pathname === "/products" ? "active" : ""}>Products</Link>
          <Link to="/cart" className={location.pathname === "/cart" ? "active" : ""}>Cart</Link>

          {isLoggedIn ? (
            <>
              <Link to="/profile" className={location.pathname === "/profile" ? "active" : ""}>{userProfile.name}</Link>
              <button className="logout-btn" onClick={onLogout}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className={location.pathname === "/login" ? "active" : ""}>Login</Link>
              <Link to="/signup" className={location.pathname === "/signup" ? "active" : ""}>Sign Up</Link>
            </>
          )}
        </nav>

        {/* Hamburger for Mobile */}
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </header>
  );
};

export default Header;