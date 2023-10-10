// Profile.jsx
import React from "react";
import "./profileStyles.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <h1 className="profile-header">Profile Page</h1>
      <p>Welcome to your profile page!</p>
      <ul className="profile-list">
        <li className="profile-list-item">Name: John Doe</li>
        <li className="profile-list-item">Email:john.doe@example.com</li>
        <li className="profile-list-item">Location: New York, NY</li>
      </ul>
    </div>
  );
};

export default Profile;
