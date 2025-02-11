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
}

export default function DogCard({ dog }: DogCardProps) {
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
            className="absolute bottom-3 right-3 w-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            src="https://img.icons8.com/?size=100&id=85033&format=png&color=FD7E14"
            alt="heart logo"
          />
        </figure>
      </div>
      {/*<!-- End Image overlay card --> */}
    </>
  );
}
