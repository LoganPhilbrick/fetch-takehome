import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";

import { fetchIDs } from "../api/fetchIDs";

export default function ProtectedRoute() {
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await fetchIDs(); // Attempt to fetch data
      } catch (error) {
        console.error("Authentication failed, redirecting to login:", error);
        navigate("/login", { replace: true }); // Redirect on error
      }
    };

    checkAuth();
  }, [navigate]);
  return <Outlet />;
}
