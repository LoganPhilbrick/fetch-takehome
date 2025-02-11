import { useEffect, useState } from "react";
import { fetchDogs } from "../api/fetchDogs";
import DogCard from "./DogCard";
import { useNavigate } from "react-router-dom";
import TopBar from "./TopBar";
import Pagination from "./Pagination";
import { PulseLoader } from "react-spinners";

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
  const [breeds, setBreeds] = useState<string[]>([]);
  const [selectedBreed, setSelectedBreed] = useState<string>("");
  const [sort, setSort] = useState<string>("breed:asc");
  const [zipCodeFilter, setZipCodeFilter] = useState<string>("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const success = await fetchDogs(pageLink, selectedBreed, sort, setNext, setPrev, setLoading, setDogsArray);
      if (!success) {
        navigate("/login", { replace: true });
      }
    };

    fetchData();
  }, [pageLink, navigate, breeds, selectedBreed, sort]);

  return (
    <div className="flex flex-col items-center w-full">
      <TopBar setBreeds={setBreeds} setSelectedBreed={setSelectedBreed} breeds={breeds} setSort={setSort} setZipCodeFilter={setZipCodeFilter} />
      {loading ? (
        <div className="absolute flex justify-center items-center w-full h-screen">
          <PulseLoader color="#74d463" />
        </div>
      ) : (
        <>
          <div className="flex flex-wrap justify-center w-5/6 mt-12 z-0">
            {dogsArray
              ?.filter((dog) => !zipCodeFilter || dog.zip_code.startsWith(String(zipCodeFilter)))
              .map((dog) => (
                <DogCard key={dog.id} dog={dog} />
              ))}
          </div>
          <div className="mb-12">
            <Pagination setPageLink={setPageLink} prev={prev} next={next} />
          </div>
        </>
      )}
    </div>
  );
}
