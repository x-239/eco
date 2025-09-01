import React from "react";
import { Search } from "lucide-react";
function SearchBar() {
  return (
    <div className="hidden sm:flex items-center gap-2 rounded-md ring-1 ring-gray-200 px-2 py-1 shadow-sm ">
      <Search className="h-4 w-4 text-gray-500" />
      <input
        id="search"
        placeholder="Search..."
        className="text-sm outline-0"
      />
    </div>
  );
}

export default SearchBar;
