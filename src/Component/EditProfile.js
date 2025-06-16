import React, { useState } from "react";

const EditProfile = () => {
  const [formData, setFormData] = useState({
    name: "Sara",
    job: "Software Engineer",
    skills: "React, Node.js, TypeScript",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form style={{ display: "flex", flexDirection: "column" }}>
      <label style={labelStyle}>Full Name</label>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        style={inputStyle}
      />

      <label style={labelStyle}>Job</label>
      <input
        name="job"
        value={formData.job}
        onChange={handleChange}
        style={inputStyle}
      />

      <label style={labelStyle}>Skills</label>
      <input
        name="skills"
        value={formData.skills}
        onChange={handleChange}
        style={inputStyle}
      />

      <button type="submit" style={buttonStyle}>
        Save Changes
      </button>
    </form>
  );
};

const labelStyle = { margin: "10px 0 5px" };
const inputStyle = {
  padding: "8px",
  borderRadius: "6px",
  border: "1px solid #ccc",
};
const buttonStyle = {
  marginTop: "20px",
  background: "#ff8a65",
  color: "white",
  padding: "10px",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};

export default EditProfile;
