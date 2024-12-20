import React from "react";
import { Search } from "lucide-react";

function SearchBar({ onSearch }) {
  return (
    <div className="px-3 mb-4">
      <div className="relative w-full md:max-w-[430px]">
        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
        <input
          type="text"
          placeholder="Search Repositories"
          className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    </div>
  );
}

export default SearchBar;
