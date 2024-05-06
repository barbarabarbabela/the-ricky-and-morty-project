import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import RadioButton from "./radio-button";
import useFilter from "../hooks/use-filter";

function FilterMenuBySpecie() {
  const [FilterMenu, setFilterMenu] = React.useState(true);
  const { handleRadioChange } = useFilter();

  const handleFilterMenu = () => {
    setFilterMenu(!FilterMenu);
  };

  const radioOptions = [
    {
      label: "Human",
      value: "human",
    },
    {
      label: "Alien",
      value: "alien",
    },
  ];

  return (
    <div>
      <div
        className="flex gap-3 items-center cursor-pointer"
        onClick={handleFilterMenu}
      >
        {FilterMenu ? (
          <IoIosArrowDroprightCircle />
        ) : (
          <IoIosArrowDropdownCircle />
        )}
        FilterMenu by species
      </div>
      <div>
        {!FilterMenu ? (
          <div className="flex flex-col ml-6">
            {radioOptions.map((option) => {
              return (
                <RadioButton
                  key={option.label}
                  label={option.label}
                  id={option.id}
                  name="species"
                  value={option.value}
                  checked={option.checked}
                  onChange={() => handleRadioChange(option.value)}
                />
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default FilterMenuBySpecie;
