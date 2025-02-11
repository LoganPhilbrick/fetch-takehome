import SearchBar from "./TopBarElements/SearchBar";
import SelectMenu from "./TopBarElements/SelectMenu";
import SortMenu from "./TopBarElements/SortMenu";
import Navbar from "./Navbar";
import { Dispatch, SetStateAction } from "react";

interface TopBarProps {
  breeds: string[];
  setSelectedBreed: Dispatch<SetStateAction<string>>;
  setBreeds: Dispatch<SetStateAction<string[]>>;
  setSort: Dispatch<SetStateAction<string>>;
}

export default function TobBar({ breeds, setSelectedBreed, setBreeds, setSort }: TopBarProps) {
  return (
    <div className="sticky top-0 w-full z-10">
      <Navbar />
      <div className="flex justify-end items-center h-24 w-full rounded bg-neutral-100/90 lg:backdrop-blur-sm shadow-md">
        <SortMenu setSort={setSort} />
        <SelectMenu setBreeds={setBreeds} setSelectedBreed={setSelectedBreed} breeds={breeds} />
        <SearchBar />
      </div>
    </div>
  );
}
