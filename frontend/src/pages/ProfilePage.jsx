import React, { useState } from "react";
import "./ProfilePage.css";

const ProfilePage = ({ profile, onProfileUpdate }) => {
  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onProfileUpdate({ ...profile, profilePicture: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    onProfileUpdate({ ...profile, name, email });
    alert("Profile updated successfully!");
  };

  return (
    <div className="profile-container">
      <h2>Your Profile</h2>

      <div className="profile-card">
        <div className="profile-picture-container">
          <img
            src={profile.profilePicture || "/images/profile-placeholder.png"}
            alt={name}
            className="profile-picture"
          />
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>

        <form className="profile-form" onSubmit={handleSave}>
          <label>
            Name
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>

          <label>
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <button type="submit" className="btn-save">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
