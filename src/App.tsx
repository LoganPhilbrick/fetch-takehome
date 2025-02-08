import { fetchDogIDs } from "./api/fetchDogIDs";

import { useQuery } from "@tanstack/react-query";
import "./App.css";
import Navbar from "./components/Navbar";
import LoginCard from "./components/LoginCard";

function App() {
  const { data, error, isLoading } = useQuery({ queryKey: ["dogIds"], queryFn: fetchDogIDs });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <Navbar />
      <div className="flex justify-center mt-48">
        <LoginCard />
      </div>
      <ul>
        {data.map((id: string) => (
          <li key={id}>{id}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
