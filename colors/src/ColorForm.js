import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ColorForm({ addColor }) {
  const INITIAL_STATE = { color: "" };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(formData);
    setFormData(INITIAL_STATE);
    navigate("/colors");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="color">Color:</label>
      <input
        id="color"
        name="color"
        value={formData.color}
        onChange={handleChange}
      />
      <button>Add Color</button>
    </form>
  );
}

export default ColorForm;
