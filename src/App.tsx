import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginCard from "./components/LoginCard";
import Dashboard from "./components/Dashboard";
import Favorites from "./components/Favorites";
import { useState } from "react";

function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [favorites, setFavorites] = useState<string[]>(() => {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  return (
    <Router>
      <Navbar />
      <div className="flex justify-center">
        <Routes>
          <Route path="/login" element={<LoginCard />} />
          <Route path="/dashboard" element={<Dashboard setFavorites={setFavorites} favorites={favorites} loading={loading} setLoading={setLoading} />} />
          <Route path="/favorites" element={<Favorites setFavorites={setFavorites} favorites={favorites} loading={loading} setLoading={setLoading} />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
