import logo from './logo.svg';
import React, { Suspense, useState, useEffect } from "react";
import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";

const OnBoarding = React.lazy(() =>
import("./Components/OnBoarding")
);

function App() {
  return (
    <div className="App">
      <HashRouter>
     <Routes>

        <Route
          path="/Components/OnBoarding"
          element={<OnBoarding/>}
      
/>
  </Routes>
  </HashRouter>
    </div>
  );
}

export default App;
