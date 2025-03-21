// import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WriteData from "./Components/WriteData";
import ReadData from "./Components/ReadData";
import EditData from "./Components/EditData";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WriteData />} />
        <Route path="/read" element={<ReadData />} />
        <Route path="/edit/:id" element={<EditData />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
