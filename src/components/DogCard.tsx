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
      <div className="overflow-hidden w-88 h-64 mb-12 rounded bg-white text-slate-500 shadow-md">
        {/*  <!-- Image --> */}
        <figure className="relative w-full h-full">
          <img src={dog.img} alt="Dog image" className="object-cover w-full h-full" />
          <figcaption className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-slate-900 p-6 text-white">
            <h3 className="text-lg font-medium ">{dog.name}</h3>
            <h3 className="text-lg font-medium ">{dog.age < 1 ? "less than 1" : dog.age} years old</h3>
            <p className="text-sm opacity-75"> {dog.breed}</p>
            <p className="text-sm opacity-75"> Zip code {dog.zip_code}</p>
          </figcaption>
        </figure>
      </div>
      {/*<!-- End Image overlay card --> */}
    </>
  );
}
