import { useEffect, useState } from "react";
import { getDogIDs } from "../api/getDogIDs";
import DogCard from "./DogCard";
import { getDogData } from "../api/getDogData";
import TopBar from "./TopBar";
import Pagination from "./Pagination";
import Spinner from "./Spinner";

interface Dog {
  id: string;
  img: string;
  name: string;
  age: number;
  zip_code: string;
  breed: string;
}
interface DashboardProps {
  favorites: string[];
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setFavorites: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function Dashboard({ favorites, loading, setLoading, setFavorites }: DashboardProps) {
  const [dogsArray, setDogsArray] = useState<Dog[]>([]);
  const [pageLink, setPageLink] = useState<string>("/dogs/search?size=25&from=0");
  const [next, setNext] = useState<string>("");
  const [prev, setPrev] = useState<string>("");
  const [breeds, setBreeds] = useState<string[]>([]);
  const [selectedBreed, setSelectedBreed] = useState<string>("");
  const [sort, setSort] = useState<string>("breed:asc");
  const [zipCodeFilter, setZipCodeFilter] = useState<string>("");

  // const navigate = useNavigate();

  useEffect(() => {
    try {
      async function getDogDataFunc() {
        setLoading(true);
        const dogIDs = await getDogIDs(pageLink, selectedBreed, sort);
        setDogsArray(await getDogData(dogIDs.resultIds));
        setNext(dogIDs.next);
        setPrev(dogIDs.prev);
        setLoading(false);
      }

      getDogDataFunc();
    } catch (error) {
      setLoading(false);
      console.log("Error getting dog ids from getDogIDs:", error);
    }
  }, [pageLink, selectedBreed, setLoading, sort]);

  return (
    <div className="flex flex-col items-center w-full">
      <TopBar setBreeds={setBreeds} setSelectedBreed={setSelectedBreed} breeds={breeds} setSort={setSort} setZipCodeFilter={setZipCodeFilter} />
      {loading ? (
        <div className="absolute flex justify-center items-center w-full h-screen">
          <Spinner />
        </div>
      ) : (
        <>
          <div className="flex flex-wrap justify-center w-5/6 mt-12 z-0">
            {dogsArray
              ?.filter((dog) => !zipCodeFilter || dog.zip_code.startsWith(String(zipCodeFilter)))
              .map((dog) => (
                <DogCard key={dog.id} dog={dog} favorites={favorites} setFavorites={setFavorites} />
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
