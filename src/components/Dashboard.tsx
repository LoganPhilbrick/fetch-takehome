import { fetchDogIDs } from "../api/fetchDogIDs";
import { useQuery } from "@tanstack/react-query";

export default function Dashboard() {
  const { data, error, isLoading } = useQuery({ queryKey: ["dogIds"], queryFn: fetchDogIDs });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.map((id: string) => (
        <li key={id}>{id}</li>
      ))}
    </ul>
  );
}
