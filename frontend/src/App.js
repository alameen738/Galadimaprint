import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";      // <-- correct
import Footer from "./components/Footer";      // <-- import Footer
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProfile, setUserProfile] = useState({
    name: "User",
    email: "user@example.com",
    profilePicture: "/images/profile-placeholder.png"
  });

  const handleLogout = () => setIsLoggedIn(false);
  const handleProfileUpdate = (updatedProfile) => setUserProfile(updatedProfile);

  return (
    <Router>
      {/* Modern navigation/header */}
      <Header
        isLoggedIn={isLoggedIn}
        userProfile={userProfile}
        onLogout={handleLogout}
      />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/profile"
            element={
              isLoggedIn ? (
                <ProfilePage profile={userProfile} onProfileUpdate={handleProfileUpdate} />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          {/* Add more routes: Products, Cart, Login, Signup */}
        </Routes>
      </main>

      {/* Footer added safely */}
      <Footer />
    </Router>
  );
}

export default App;