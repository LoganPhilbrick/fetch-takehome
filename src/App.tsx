import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Navbar from "./components/Navbar";
import LoginCard from "./components/LoginCard";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <div className="flex justify-center">
        <Routes>
          <Route path="/login" element={<LoginCard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
