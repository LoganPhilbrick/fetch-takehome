import { Navigate, Outlet } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchDogIDs } from "../api/fetchDogIDs";

export default function ProtectedRoute() {
  const { error, isLoading } = useQuery({ queryKey: ["dogIds"], queryFn: fetchDogIDs });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <Navigate to="/login" replace />;

  return <Outlet />;
}
