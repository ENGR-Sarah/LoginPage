import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileInfo from "./ProfileInfo";
import EditProfile from "./EditProfile";
import profilePic from "../assets/boy.png";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("info");
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <button onClick={() => navigate("/home")} style={styles.backButton}>
          ← Back to Home
        </button>
        <div style={styles.tabs}>
          <button
            style={activeTab === "info" ? styles.activeTab : styles.tab}
            onClick={() => setActiveTab("info")}
          >
            Profile Info
          </button>
          <button
            style={activeTab === "edit" ? styles.activeTab : styles.tab}
            onClick={() => setActiveTab("edit")}
          >
            Edit Profile
          </button>
        </div>

        <div style={styles.imageContainer}>
          <img src={profilePic} alt="Profile" style={styles.image} />
        </div>

        <div>
          {activeTab === "info" && <ProfileInfo />}
          {activeTab === "edit" && <EditProfile />}
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    display: "flex",
    justifyContent: "center",
    padding: "40px",
    background: "#f9f9f9",
    minHeight: "100vh",
  },
  card: {
    width: "400px",
    background: "white",
    borderRadius: "12px",
    padding: "20px",
    boxShadow: "0 0 10px #ccc",
  },
  backButton: {
    background: "none",
    border: "none",
    color: "#ff8a65",
    cursor: "pointer",
    fontSize: "16px",
    padding: "10px 0",
    marginBottom: "20px",
    display: "block",
    width: "100%",
    textAlign: "left"
  },
  tabs: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  tab: {
    flex: 1,
    padding: "10px",
    background: "#eee",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
  },
  activeTab: {
    flex: 1,
    padding: "10px",
    background: "#ff8a65",
    color: "white",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },
  image: {
    width: "100px",
    borderRadius: "50%",
  },
};

export default ProfilePage;
