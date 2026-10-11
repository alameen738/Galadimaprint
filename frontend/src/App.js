import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetail from "./pages/ProductDetail";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [userProfile, setUserProfile] = useState({
    name: "User",
    email: "user@example.com",
    profilePicture: "/images/profile-placeholder.png",
  });

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleProfileUpdate = (updatedProfile) => {
    setUserProfile(updatedProfile);
  };

  return (
    <Router>
      <Header
        isLoggedIn={isLoggedIn}
        userProfile={userProfile}
        onLogout={handleLogout}
      />

      <main>
        <Routes>
          {/* Home */}
          <Route path="/" element={<HomePage />} />

          {/* Services */}
          <Route path="/services" element={<ServicesPage />} />

          {/* Products */}
          <Route path="/products" element={<ProductsPage />} />

          {/* Product Details */}
          <Route path="/products/:id" element={<ProductDetail />} />

          {/* Cart */}
          <Route path="/cart" element={<CartPage />} />

          {/* Login */}
          <Route
            path="/login"
            element={
              isLoggedIn ? (
                <Navigate to="/profile" replace />
              ) : (
                <LoginPage />
              )
            }
          />

          {/* Sign Up */}
          <Route
            path="/signup"
            element={
              isLoggedIn ? (
                <Navigate to="/profile" replace />
              ) : (
                <SignUpPage />
              )
            }
          />

          {/* Profile */}
          <Route
            path="/profile"
            element={
              isLoggedIn ? (
                <ProfilePage
                  profile={userProfile}
                  onProfileUpdate={handleProfileUpdate}
                />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          {/* Unknown URL */}
          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;