
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = ({ isLoggedIn, userProfile, onLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const closeMenu = () => setMenuOpen(false);

  const navLinkClass = (path) =>
    `transition-colors duration-200 hover:text-green-600 ${
      location.pathname === path
        ? "font-semibold text-green-600"
        : "text-gray-700"
    }`;

  const handleSearch = (event) => {
    event.preventDefault();

    const query = searchTerm.trim();
    if (!query) return;

    navigate(`/products?search=${encodeURIComponent(query)}`);
    closeMenu();
  };

  const SearchForm = ({ mobile = false }) => (
    <form
      onSubmit={handleSearch}
      role="search"
      className={`flex items-center ${
        mobile ? "w-full" : "w-56 lg:w-64"
      }`}
    >
      <input
        type="search"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        placeholder="Search products..."
        aria-label="Search products"
        className="min-w-0 flex-1 rounded-l-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
      />

      <button
        type="submit"
        aria-label="Search"
        className="flex items-center justify-center rounded-r-lg bg-green-600 px-3 py-2 text-white transition hover:bg-green-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
      </button>
    </form>
  );

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center"
          aria-label="GaladimaPrint Home"
        >
          <img
            src="/images/Logo.png"
            alt="GaladimaPrint Logo"
            className="h-12 w-auto max-w-[160px] object-contain sm:h-14"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-5 lg:flex"
          aria-label="Main navigation"
        >
          <Link to="/" className={navLinkClass("/")}>
            Home
          </Link>

          <Link to="/products" className={navLinkClass("/products")}>
            Products
          </Link>

          <Link to="/services" className={navLinkClass("/services")}>
            Services
          </Link>

          <Link to="/cart" className={navLinkClass("/cart")}>
            Cart
          </Link>

          {isLoggedIn ? (
            <>
              <Link to="/profile" className={navLinkClass("/profile")}>
                {userProfile?.name || "My Account"}
              </Link>

              <button
                type="button"
                onClick={onLogout}
                className="rounded-lg bg-red-500 px-3 py-2 text-white transition hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className={navLinkClass("/login")}>
                Login
              </Link>

              <Link
                to="/signup"
                className="rounded-lg bg-green-600 px-3 py-2 font-medium text-white transition hover:bg-green-700"
              >
                Sign Up
              </Link>
            </>
          )}
        </nav>

        {/* Desktop Search */}
        <div className="hidden xl:block">
          <SearchForm />
        </div>

        {/* Mobile/Tablet Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((previous) => !previous)}
          className="flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-gray-100 lg:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <span className="text-2xl leading-none text-gray-700">×</span>
          ) : (
            <>
              <span className="h-0.5 w-6 rounded bg-gray-700" />
              <span className="h-0.5 w-6 rounded bg-gray-700" />
              <span className="h-0.5 w-6 rounded bg-gray-700" />
            </>
          )}
        </button>
      </div>

      {/* Mobile/Tablet Navigation */}
      {menuOpen && (
        <nav
          className="border-t border-gray-100 bg-white px-4 py-4 shadow-md lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-4">
            <SearchForm mobile />

            <Link to="/" onClick={closeMenu} className={navLinkClass("/")}>
              Home
            </Link>

            <Link
              to="/products"
              onClick={closeMenu}
              className={navLinkClass("/products")}
            >
              Products
            </Link>

            <Link
              to="/services"
              onClick={closeMenu}
              className={navLinkClass("/services")}
            >
              Services
            </Link>

            <Link
              to="/cart"
              onClick={closeMenu}
              className={navLinkClass("/cart")}
            >
              Cart
            </Link>

            {isLoggedIn ? (
              <>
                <Link
                  to="/profile"
                  onClick={closeMenu}
                  className={navLinkClass("/profile")}
                >
                  {userProfile?.name || "My Account"}
                </Link>

                <button
                  type="button"
                  onClick={() => {
                    closeMenu();
                    onLogout?.();
                  }}
                  className="rounded-lg bg-red-500 px-4 py-2 text-left text-white hover:bg-red-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={closeMenu}
                  className={navLinkClass("/login")}
                >
                  Login
                </Link>

                <Link
                  to="/signup"
                  onClick={closeMenu}
                  className="rounded-lg bg-green-600 px-4 py-2 text-center font-medium text-white hover:bg-green-700"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
