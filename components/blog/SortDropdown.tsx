"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Dispatch, SetStateAction } from "react";
import { FaSort, FaArrowUp, FaArrowDown } from "react-icons/fa";

export const SortDropdown = ({
  sortBy,
  setSortBy,
}: {
  sortBy: string;
  setSortBy: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="gap-2">
          <FaSort />
          {sortBy === "newest" && "Newest"}
          {sortBy === "oldest" && "Oldest"}
          {sortBy === "popular" && "Most Popular"}
          {sortBy === "least-popular" && "Least Popular"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => setSortBy("newest")}>
          <FaArrowDown className="mr-2" />
          Newest
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setSortBy("oldest")}>
          <FaArrowUp className="mr-2" />
          Oldest
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setSortBy("popular")}>
          <FaArrowUp className="mr-2" />
          Most Popular
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setSortBy("least-popular")}>
          <FaArrowDown className="mr-2" />
          Least Popular
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
