import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (!loggedIn) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div style={styles.container}>
      <h1>Welcome to the Home Page!</h1>
      <div style={styles.buttonContainer}>
        <button onClick={() => navigate("/profile")} style={styles.button}>
          View Profile
        </button>
        <button onClick={() => navigate("/logout")} style={styles.button}>
          Sign Out
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "100px"
  },
  buttonContainer: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    marginTop: "20px"
  },
  button: {
    padding: "10px 20px",
    background: "#ff8a65",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  }
};

export default Home;
