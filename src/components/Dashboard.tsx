import { useEffect, useState } from "react";
import { fetchDogs } from "../api/fetchDogs";
import DogCard from "./DogCard";
import { useNavigate } from "react-router-dom";

interface Dog {
  id: string;
  img: string;
  name: string;
  age: number;
  zip_code: string;
  breed: string;
}

export default function Dashboard() {
  const [dogsArray, setDogsArray] = useState<Dog[]>([]);
  const [pageLink, setPageLink] = useState<string>("/dogs/search?size=25&from=0");
  const [next, setNext] = useState<string>("");
  const [prev, setPrev] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const success = await fetchDogs(pageLink, setNext, setPrev, setLoading, setDogsArray);
      if (!success) {
        navigate("/login", { replace: true });
      }
    };

    fetchData();
  }, [pageLink, navigate]);

  return (
    <div className="flex flex-col items-center">
      {loading ? <p>loading...</p> : <></>}
      <div className="flex flex-wrap justify-evenly w-2/3 mt-24">
        {dogsArray?.map((dog) => (
          <DogCard key={dog.id} dog={dog} />
        ))}
      </div>
      <div className="mb-12">
        <button className={`bg-green-500 w-12 h-8 ${!prev ? "opacity-50 cursor-not-allowed" : ""}`} onClick={() => setPageLink(prev)} disabled={!prev}>
          prev
        </button>

        <button className={`bg-green-500 w-12 h-8 ${!next ? "opacity-50 cursor-not-allowed" : ""}`} onClick={() => setPageLink(next)} disabled={!next}>
          next
        </button>
      </div>
    </div>
  );
}
