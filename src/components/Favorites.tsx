import { useEffect, useState } from "react";
import DogCard from "./DogCard";
import { PulseLoader } from "react-spinners";
import { getDogData } from "../api/getDogData";
import { getMatch } from "../api/getMatch";

interface Dog {
  id: string;
  img: string;
  name: string;
  age: number;
  zip_code: string;
  breed: string;
}

// interface Match {
//   match: string | undefined;
// }

interface FavoritesProps {
  favorites: string[];
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setFavorites: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function Favorites({ favorites, loading, setLoading, setFavorites }: FavoritesProps) {
  const [favoriteDogs, setFavoriteDogs] = useState<Dog[]>([]);
  const [match, setMatch] = useState<Dog | null>(null);

  useEffect(() => {
    try {
      async function updateList() {
        setLoading(true);
        setFavoriteDogs(await getDogData(favorites));
        setLoading(false);
      }

      updateList();
    } catch (error) {
      setLoading(false);
      console.log("Error setting favorites:", error);
    }
  }, [favorites, setLoading]);

  const matchButton = async () => {
    try {
      console.log("pressed");
      const matchedId = await getMatch(favorites);
      const matchedDogs = await getDogData([matchedId]);

      if (matchedDogs.length > 0) {
        setMatch(matchedDogs[0]);
      }
    } catch (error) {
      console.error("Error fetching match:", error);
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      {loading ? (
        <div className="absolute flex justify-center items-center w-full h-screen">
          <PulseLoader color="#74d463" />
        </div>
      ) : (
        <>
          <div className="sticky top-0 w-full z-10">
            <div className="flex justify-center items-center h-24 w-full rounded bg-neutral-100/90 lg:backdrop-blur-sm shadow-md">
              <button
                className="inline-flex items-center justify-center h-full w-full gap-2 px-5 text-lg font-medium tracking-wide text-white transition duration-300 shadow-md whitespace-nowrap bg-green-500 shadow-green-200 transition duration-200 ease-in-out hover:scale-105 hover:bg-green-600 hover:shadow-sm hover:shadow-green-200 focus:bg-green-700 focus:shadow-sm focus:shadow-green-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-green-300 disabled:bg-green-300 disabled:shadow-none"
                onClick={matchButton}
              >
                <span>Find your match!</span>
                <img className="w-6" src="https://img.icons8.com/?size=100&id=85051&format=png&color=FFFFFF" alt="fetch logo" />
              </button>
            </div>
          </div>
          <div>{match?.name}</div>
          <div className="flex flex-wrap justify-center w-5/6 mt-12 z-0">
            {favoriteDogs?.map((dog) => (
              <DogCard key={dog.id} dog={dog} favorites={favorites} setFavorites={setFavorites} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
