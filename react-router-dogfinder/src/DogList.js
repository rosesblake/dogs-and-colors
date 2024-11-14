import React from "react";
import "./DogList.css";
import { useNavigate } from "react-router-dom";

function Dogs({ dogList }) {
  const navigate = useNavigate();
  return (
    <div className="DogList-container">
      {dogList.map((dog) => (
        <div
          key={dog.src}
          className="DogList-card"
          onClick={() => navigate(`/dogs/${dog.name}`)}
          style={{ cursor: "pointer" }}
        >
          <p>Dog: {dog.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Dogs;
