import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.js";
import Campaigns from "./pages/Campaigns.js";
import ProtectedRoute from "./pages/ProtectedRoute.js";
import CDPage from "./pages/CD.js";
import CDQAPage from "./pages/CDQA.js";
import QualityPage from "./pages/Quality.js";
import Navbar from "./pages/Navbar.js";

function CD() {
  return <h1>CD Dashboard</h1>;
}
function CDQA() {
  return <h1>CDQA Dashboard</h1>;
}
function Quality() {
  return <h1>Quality Dashboard</h1>;
}

function App() {

  const token = localStorage.getItem("token");

  return (
    <Router>
            {true && <Navbar />} {/* Navbar visible only if logged in */}

      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/cd"
          element={
            <ProtectedRoute>
              <CDPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cdqa"
          element={
            <ProtectedRoute>
              <CDQAPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/quality"
          element={
            <ProtectedRoute>
              <QualityPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/main"
          element={
            <ProtectedRoute>
              <Campaigns />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;