import { Dispatch, SetStateAction, useEffect } from "react";
import { fetchBreeds } from "../../api/fetchbreeds";

interface SelectMenuProps {
  breeds: string[];
  setSelectedBreed: Dispatch<SetStateAction<string>>;
  setBreeds: Dispatch<SetStateAction<string[]>>;
}

export default function SelectMenu({ breeds, setBreeds, setSelectedBreed }: SelectMenuProps) {
  useEffect(() => {
    fetchBreeds()
      .then((breedsArray) => {
        setBreeds(breedsArray);
      })
      .catch((error) => console.error("Error fetching breeds:", error));
  }, [setBreeds]); //

  return (
    <>
      {/*<!-- Component: Rounded large basic select --> */}
      <p className="mr-1 text-slate-500">Filter </p>
      <div className="flex relative my-6 md:w-60 mr-6">
        <select
          id="id-10"
          name="id-10"
          required
          className="peer relative h-10 w-full appearance-none rounded-xl border-2 border-neutral-300 px-4 text-slate-500 outline-none transition-all autofill:bg-white focus:border-emerald-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
          onChange={(e) => setSelectedBreed(e.target.value)}
        >
          <option value="" disabled selected></option>
          <option value="">All</option>
          {breeds?.map((breed, index) => (
            <option value={breed} key={index}>
              {breed}
            </option>
          ))}
        </select>
        <label
          htmlFor="id-10"
          className="pointer-events-none absolute top-2.25 left-2 z-[1] px-2 text-base font-light text-gray-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full peer-focus:bg-neutral-100 before:transition-all peer-required:after:text-pink-500 peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent hidden md:block"
        >
          Filter by breed
        </label>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="pointer-events-none absolute top-3 right-2 h-5 w-5 fill-slate-400 transition-all peer-focus:fill-emerald-500 peer-disabled:cursor-not-allowed"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-labelledby="title-10 description-10"
          role="graphics-symbol"
        >
          <title id="title-10">Arrow Icon</title>
          <desc id="description-10">Arrow icon of the select list.</desc>
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </div>
      {/*<!-- End Rounded large basic select --> */}
    </>
  );
}
