import React from "react";
import { Routes, Route, Navigate, useParams } from "react-router-dom";
import DogList from "./DogList";
import DogDetails from "./DogDetails";
//to get the specific dog before going to route, so i wouldn't have to send the entire dogList to DogDetails, would I jsut use state?
function AppRoutes({ dogList }) {
  return (
    <Routes>
      <Route path="/dogs" element={<DogList dogList={dogList} />} />
      <Route path="/dogs/:name" element={<DogDetails dogList={dogList} />} />
      <Route path="*" element={<Navigate to="/dogs" />} />
    </Routes>
  );
}

export default AppRoutes;
