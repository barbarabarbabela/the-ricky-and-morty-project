import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import RadioButton from "./radio-button";

function FilterBySpecie() {
  const [filter, setFilter] = React.useState(false);

  const handleFilter = () => {
    setFilter(!filter);
  };

  return (
    <div>
      <div
        className="flex gap-3 items-center cursor-pointer"
        onClick={handleFilter}
      >
        {filter ? <IoIosArrowDroprightCircle /> : <IoIosArrowDropdownCircle />}
        Filter by species
      </div>
      <div>
        {!filter ? (
          <div className="flex flex-col ml-6">
            <RadioButton label="Human" name="species" />
            <RadioButton label="Alien" name="species" />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default FilterBySpecie;
