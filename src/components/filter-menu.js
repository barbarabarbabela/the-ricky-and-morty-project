import React from "react";
import Input from "./input";
import { GoSearch } from "react-icons/go";
import FilterMenuBySpecie from "./filter-by-species";
import FilterMenuByStatus from "./filter-by-status";
import { FiSliders } from "react-icons/fi";

function FilterMenu() {
  return (
    <div className="bg-primary p-3 w-56 text-secondary">
      <div className="mb-3">
        <Input
          id="search"
          placeholder="Search"
          icon={GoSearch}
          onChange={(e) => console.log(e.target.value)}
        />
      </div>

      <div>
        <div className="flex items-center gap-2">
          <FiSliders />
          <h1 className="text-xl font-bold">Filtros</h1>
        </div>
        <div className="mt-3 text-black flex flex-col">
          <FilterMenuBySpecie />
          <FilterMenuByStatus />
        </div>
      </div>
    </div>
  );
}

export default FilterMenu;
