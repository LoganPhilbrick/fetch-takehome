import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Dog {
  id: string;
  img: string;
  name: string;
  age: number;
  zip_code: string;
  breed: string;
}

interface MatchCardProps {
  match: Dog | null;
}

export default function MatchCard({ match }: MatchCardProps) {
  const [showButton, setShowButton] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    navigate("/Dashboard");
  };
  return (
    <div className="flex flex-col items-center">
      {/*<!-- Component: Image overlay card --> */}
      <div className="overflow-hidden w-112 bg-white text-slate-500 shadow-xl shadow-black/25">
        {/*  <!-- Image --> */}
        <figure className="relative">
          <img src={match?.img} alt="card image" className="aspect-square object-cover w-full" />
          <figcaption className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-neutral-900 p-6 text-white">
            <h3 className="text-3xl font-medium ">{match?.name}</h3>
            <p className="text-xl opacity-75">{match?.age} year old </p>
            <p className="text-xl opacity-75">{match?.breed}</p>
          </figcaption>
        </figure>
      </div>
      <h2 className="text-3xl font-medium text-green-500 my-8">Match Found!</h2>
      <div>
        <button
          className={`inline-flex items-center justify-center h-12 gap-2 px-5 text-sm font-medium tracking-wide text-white transition-all duration-500 rounded shadow-md whitespace-nowrap bg-green-500 shadow-green-200 ease-in-out hover:scale-105 hover:bg-green-600 hover:shadow-sm hover:shadow-green-200 focus:bg-green-700 focus:shadow-sm focus:shadow-green-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-green-300 disabled:bg-green-300 disabled:shadow-none ${
            showButton ? "opacity-100" : "opacity-0"
          }`}
          onClick={handleClick}
        >
          <span>Continue search</span>
        </button>
      </div>

      {/*<!-- End Image overlay card --> */}
    </div>
  );
}
