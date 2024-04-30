import React from "react";
import { MdOutlineFilterAlt } from "react-icons/md";
import FilterBySpecie from "./filter-by-species";
import FilterByStatus from "./filter-by-status";

function Filter() {
  return (
    <div className="m-2">
      <div className="flex items-center">
        <MdOutlineFilterAlt className="text-xl" />
        <h1 className="text-xl font-bold text-[#262A32]">Filtros</h1>
      </div>
      <div className="mt-3 flex flex-col gap-4">
        <FilterBySpecie />
        <FilterByStatus />
      </div>
    </div>
  );
}

export default Filter;
