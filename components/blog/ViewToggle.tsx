"use client";

import { Toggle } from "@/components/ui/toggle";
import { FaTh, FaList } from "react-icons/fa";

export const ViewToggle = ({
  isGridView,
  toggleView,
}: {
  isGridView: boolean;
  toggleView: () => void;
}) => {
  return (
    <Toggle
      pressed={isGridView}
      onPressedChange={toggleView}
      className="hidden md:inline-block"
    >
      <div className="flex items-center gap-2">
        {isGridView ? <FaTh /> : <FaList />}
        {isGridView ? "Grid View" : "List View"}
      </div>
    </Toggle>
  );
};
