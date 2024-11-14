import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Color.css";
function Color() {
  const { color } = useParams();
  const navigate = useNavigate();
  return (
    <div className="bg" style={{ backgroundColor: color }}>
      <button onClick={() => navigate(-1)}>go back</button>
    </div>
  );
}
export default Color;
