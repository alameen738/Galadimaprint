import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = ({ isLoggedIn, userProfile, onLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-green-600">
          GaladimaPrint
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className={`hover:text-green-600 ${location.pathname === "/" ? "text-green-600 font-semibold" : "text-gray-700"}`}
          >
            Home
          </Link>
          <Link
            to="/products"
            className={`hover:text-green-600 ${location.pathname === "/products" ? "text-green-600 font-semibold" : "text-gray-700"}`}
          >
            Products
          </Link>
          <Link
            to="/cart"
            className={`hover:text-green-600 ${location.pathname === "/cart" ? "text-green-600 font-semibold" : "text-gray-700"}`}
          >
            Cart
          </Link>

          {isLoggedIn ? (
            <>
              <Link
                to="/profile"
                className={`hover:text-green-600 ${location.pathname === "/profile" ? "text-green-600 font-semibold" : "text-gray-700"}`}
              >
                {userProfile.name}
              </Link>
              <button
                onClick={onLogout}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="hover:text-green-600 text-gray-700"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="hover:text-green-600 text-gray-700"
              >
                Sign Up
              </Link>
            </>
          )}
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex flex-col gap-1 cursor-pointer" onClick={toggleMenu}>
          <span className="w-6 h-0.5 bg-gray-700"></span>
          <span className="w-6 h-0.5 bg-gray-700"></span>
          <span className="w-6 h-0.5 bg-gray-700"></span>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white px-6 pb-4 flex flex-col gap-3">
          <Link to="/" onClick={toggleMenu} className="hover:text-green-600">Home</Link>
          <Link to="/products" onClick={toggleMenu} className="hover:text-green-600">Products</Link>
          <Link to="/cart" onClick={toggleMenu} className="hover:text-green-600">Cart</Link>
          {isLoggedIn ? (
            <>
              <Link to="/profile" onClick={toggleMenu} className="hover:text-green-600">{userProfile.name}</Link>
              <button onClick={onLogout} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" onClick={toggleMenu} className="hover:text-green-600">Login</Link>
              <Link to="/signup" onClick={toggleMenu} className="hover:text-green-600">Sign Up</Link>
            </>
          )}
        </nav>
      )}
    </header>
  );
};

export default Header;