import { useEffect, useState } from "react";
import { fetchIDs } from "../api/fetchIDs";
import { fetchDogs } from "../api/fetchDogs";
import DogCard from "./DogCard";
import TopBar from "./TopBar";
import Pagination from "./Pagination";

interface Dog {
  id: string;
  img: string;
  name: string;
  age: number;
  zip_code: string;
  breed: string;
}

interface SearchData {
  next: string | null;
  prev: string | null;
  resultIds: string[];
  total: number;
}

export default function Dashboard() {
  const [searchData, setSearchData] = useState<SearchData>();
  const [ids, setIds] = useState<string[]>([]);
  const [dogsArray, setDogsArray] = useState<Dog[]>();
  const [pageLink, setPageLink] = useState<string>("/dogs/search?size=25&from=0");
  const [next, setNext] = useState<string>("");
  const [prev, setPrev] = useState<string>("");

  useEffect(() => {
    const getSearchResults = async () => {
      try {
        const searchObj = await fetchIDs(pageLink);
        setSearchData(searchObj);
        setNext(searchObj.next);
        setPrev(searchObj.prev);
        setIds(searchObj.resultIds);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    getSearchResults();
  }, [pageLink]);

  useEffect(() => {
    const getDogObjects = async () => {
      try {
        const dogObjects = await fetchDogs(ids);
        // console.log(dogObjects);
        setDogsArray(dogObjects);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    getDogObjects();
  }, [ids]);

  useEffect(() => {
    console.log(searchData);
  }, [searchData]);

  return (
    <div className="flex flex-col items-center">
      <TopBar />
      <div className="flex flex-wrap justify-center w-5/6 mt-12">
        {dogsArray?.map((dog) => (
          <DogCard key={dog.id} dog={dog} />
        ))}
      </div>
      <div className="mb-12">
        <Pagination setPageLink={setPageLink} prev={prev} next={next} />
      </div>
    </div>
  );
}
