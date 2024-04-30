import React from "react";
import Input from "./input";
import { GoSearch } from "react-icons/go";
import Filter from "./filter";

function UtilityBar() {
  return (
    <div className="bg-[#FF9800] p-3 mt-8 h-screen flex flex-col gap-4 w-56">
      <Input
        id="search"
        placeholder="Search"
        icon={GoSearch}
        onChange={(e) => console.log(e.target.value)}
      />
      <Filter />
    </div>
  );
}

export default UtilityBar;
