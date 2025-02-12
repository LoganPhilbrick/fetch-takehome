import { useEffect } from "react";

interface Dog {
  id: string;
  img: string;
  name: string;
  age: number;
  zip_code: string;
  breed: string;
}

interface DogCardProps {
  dog: Dog;
  favorites: string[];
  setFavorites: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function DogCard({ dog, favorites, setFavorites }: DogCardProps) {
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (dog: Dog) => {
    setFavorites((prev) => (prev.includes(dog.id) ? prev.filter((favId) => favId !== dog.id) : [...prev, dog.id]));
  };

  return (
    <>
      {/*<!-- Component: Image overlay card --> */}
      <div className="overflow-hidden w-112 h-64 mb-12 mx-6 rounded bg-white text-slate-500 hover:scale-105 hover:shadow-lg duration-200 hover:shadow-neutral-300 ease-in-out">
        {/*  <!-- Image --> */}
        <figure className="flex items-center w-full h-full relative group ">
          <img src={dog.img} alt="Dog image" className="object-cover aspect-square rounded w-1/2 m-4" />
          <figcaption className=" w-1/2 p-6 text-slate-600 ">
            <h3 className="text-lg font-medium ">{dog.name}</h3>
            <h3 className="text-lg font-medium ">{dog.age < 1 ? "less than 1" : dog.age} years old</h3>
            <p className="text-sm opacity-75">Breed: {dog.breed}</p>
            <p className="text-sm opacity-75"> Zip code - {dog.zip_code}</p>
          </figcaption>

          <img
            className="absolute bottom-4 right-4 w-6 opacity-0 group-hover:opacity-100 transition-all duration-200 transform hover:scale-125"
            src={favorites.includes(dog.id) ? "https://img.icons8.com/?size=100&id=85338&format=png&color=FD7E14" : "https://img.icons8.com/?size=100&id=85033&format=png&color=FD7E14"}
            alt="heart logo"
            onClick={() => toggleFavorite(dog)}
          />
        </figure>
      </div>
      {/*<!-- End Image overlay card --> */}
    </>
  );
}
