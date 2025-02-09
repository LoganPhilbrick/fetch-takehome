import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginCard from "./components/LoginCard";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/login" element={<LoginCard />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
