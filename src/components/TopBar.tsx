import SearchBar from "./TopBarElements/SearchBar";
import SelectBreedMenu from "./TopBarElements/SelectBreedMenu";
import SortMenu from "./TopBarElements/SortMenu";
export default function TobBar() {
  return (
    <div className="flex justify-end items-center h-24 w-full z-20 rounded bg-neutral-100 shadow-md">
      <SortMenu />
      <SelectBreedMenu />
      <SearchBar />
    </div>
  );
}
