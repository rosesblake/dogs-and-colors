import "./App.css";
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ColorList from "./ColorList";
import Color from "./Color";
import { v4 as uuid } from "uuid";
import NewColor from "./NewColor";

function App() {
  const [colors, setColors] = useState([
    { color: "blue" },
    { color: "green" },
    { color: "purple" },
  ]);
  const addColor = (color) => {
    let newColor = { ...color, id: uuid() };
    setColors((colors) => [newColor, ...colors]);
  };

  return (
    <div>
      <Routes>
        <Route path="/colors" element={<ColorList colors={colors} />} />
        <Route path="/colors/:color" element={<Color colors={colors} />} />
        <Route path="/colors/new" element={<NewColor addColor={addColor} />} />
        <Route path="*" element={<Navigate to="/colors" />} />
      </Routes>
    </div>
  );
}

export default App;
