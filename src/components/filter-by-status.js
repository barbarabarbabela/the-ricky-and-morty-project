import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import RadioButton from "./radio-button";
import useFilter from "../hooks/use-filter";

function FilterMenuByStatus() {
  const [openFilterMenu, setOpenFilterMenu] = React.useState(true);
  const { handleFilterChange } = useFilter();

  const handleFilterMenu = () => {
    setOpenFilterMenu(!openFilterMenu);
  };

  const statusOptions = [
    {
      label: "Alive",
      value: "alive",
    },
    {
      label: "Dead",
      value: "dead",
    },
    {
      label: "Unknown",
      value: "unknown",
    },
  ];

  return (
    <div>
      <div
        className="flex gap-3 items-center  cursor-pointer"
        onClick={handleFilterMenu}
      >
        {openFilterMenu ? (
          <IoIosArrowDroprightCircle />
        ) : (
          <IoIosArrowDropdownCircle />
        )}
        Filter by status
      </div>
      <div>
        {!openFilterMenu ? (
          <div className="flex flex-col ml-6">
            {statusOptions.map((option) => {
              return (
                <RadioButton
                  key={option.label}
                  label={option.label}
                  name="status"
                  value={option.value}
                  checked={option.checked}
                  onChange={() => handleFilterChange(option.value)}
                />
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default FilterMenuByStatus;
