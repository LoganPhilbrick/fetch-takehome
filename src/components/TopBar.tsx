import SearchBar from "./TopBarElements/SearchBar";
import SelectMenu from "./TopBarElements/SelectMenu";
import SortMenu from "./TopBarElements/SortMenu";
import Navbar from "./Navbar";
import { Dispatch, SetStateAction } from "react";

interface SelectMenuProps {
  breeds: string[];
  setBreeds: Dispatch<SetStateAction<string[]>>;
}

export default function TobBar({ breeds, setBreeds }: SelectMenuProps) {
  return (
    <div className="sticky top-0 w-full z-10">
      <Navbar />
      <div className="flex justify-end items-center h-24 w-full rounded bg-neutral-100/90 lg:backdrop-blur-sm shadow-md">
        <SortMenu />
        <SelectMenu setBreeds={setBreeds} breeds={breeds} />
        <SearchBar />
      </div>
    </div>
  );
}
