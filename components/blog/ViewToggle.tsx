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
    <Toggle pressed={isGridView} onPressedChange={toggleView} className="gap-2">
      {isGridView ? <FaList /> : <FaTh />}
      {isGridView ? "List View" : "Grid View"}
    </Toggle>
  );
};
