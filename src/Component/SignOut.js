import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignOut = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  }, [navigate]);

  return <p>Signing out...</p>;
};

export default SignOut;
