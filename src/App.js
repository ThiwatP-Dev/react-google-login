import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LineLoginCallback from "./LineLoginCallback";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/callback" element={<LineLoginCallback />} />
      </Routes>
    </Router>
  );
}

export default App;
