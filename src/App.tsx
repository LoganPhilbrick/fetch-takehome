import { fetchDogIDs } from "./api/fetchDogIDs";
import { login } from "./api/login";
// import { logout } from "./api/logout";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const { data, error, isLoading } = useQuery({ queryKey: ["dogIds"], queryFn: fetchDogIDs });

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: login,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["login"] }),
  });

  useEffect(() => {
    mutate({ name: "John Doe", email: "john.doe@example.com" });
  }, [mutate]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <Navbar />
      <ul>
        {data.map((id: string) => (
          <li key={id}>{id}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
