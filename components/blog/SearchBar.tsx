"use client";

import { Input } from "@/components/ui/input";
import { Dispatch, SetStateAction } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";

export const SearchBar = ({
  searchQuery,
  setSearchQuery,
}: {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div className="relative w-full max-w-md">
      <Input
        type="text"
        placeholder="Search by title or subject..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="pl-10 dark:bg-gray-900"
      />
      <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
      {searchQuery && (
        <button
          onClick={() => setSearchQuery("")}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
        >
          <FaTimes />
        </button>
      )}
    </div>
  );
};
