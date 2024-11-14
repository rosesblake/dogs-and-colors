import React from "react";
import { Link } from "react-router-dom";
import ColorForm from "./ColorForm";

function ColorList({ colors }) {
  const renderColors = () => {
    return (
      <>
        <div>
          <h1>
            <Link to="/colors/new">Add new color</Link>
          </h1>
        </div>
        <h2>Select a Color</h2>
        {colors.map((color) => (
          <p key={color.id}>
            <Link to={`/colors/${color.color}`}>{color.color}</Link>
          </p>
        ))}
      </>
    );
  };

  return <>{renderColors()}</>;
}
export default ColorList;
