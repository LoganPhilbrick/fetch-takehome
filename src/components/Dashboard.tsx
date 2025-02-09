import { useEffect, useState } from "react";
import { fetchIDs } from "../api/fetchIDs";
import { fetchDogs } from "../api/fetchDogs";

interface Dog {
  id: string;
  img: string;
  name: string;
  age: number;
  zip_code: string;
  breed: string;
}

export default function Dashboard() {
  const [searchData, setSearchData] = useState<string[]>([]);
  const [ids, setIds] = useState<string[]>([]);
  const [dogsArray, setDogsArray] = useState<Dog[]>();

  useEffect(() => {
    const getSearchResults = async () => {
      try {
        const searchObj = await fetchIDs();
        setSearchData(searchObj);
        setIds(searchObj.resultIds);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    getSearchResults();
  }, []);

  useEffect(() => {
    const getDogObjects = async () => {
      try {
        const dogObjects = await fetchDogs(ids);
        console.log(dogObjects);
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
    <>
      <ul>
        {dogsArray?.map((dog) => (
          <li key={dog.id}>{dog.name}</li>
        ))}
      </ul>
    </>
  );
}
