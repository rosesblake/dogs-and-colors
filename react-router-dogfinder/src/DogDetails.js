import React from "react";
import { useParams } from "react-router-dom";

function DogDetails({ dogList }) {
  const { name } = useParams();
  const dog = dogList.find((dog) => dog.name === name);
  if (!dog) {
    return <p>Dog not found</p>;
  }
  return (
    <div className="DogList-container">
      <div className="DogList-card">
        <h1>{dog.name}</h1>
        <p>Age: {dog.age}</p>
        <ul>
          Fun Facts:{" "}
          {dog.facts.map((fact) => (
            <li>{fact}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DogDetails;
