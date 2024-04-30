import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import RadioButton from "./radio-button";

function FilterByStatus() {
  const [filter, setFilter] = React.useState(false);
  const [check, setCheck] = React.useState(false);

  const handleFilter = () => {
    setFilter(!filter);
  };

  const handleCheck = () => {
    setCheck(!check);
    console.log(check);
  };

  const radioOptions = [
    {
      label: "Alive",
      id: "alive",
      onChange: () => {
        handleCheck;
      },
    },
    {
      label: "Dead",
      id: "dead",
      onChange: () => {
        handleCheck;
      },
    },
    {
      label: "Unknown",
      id: "alive",
      onChange: () => {
        handleCheck;
      },
    },
  ];

  return (
    <div>
      <div
        className="flex gap-3 items-center  cursor-pointer"
        onClick={handleFilter}
      >
        {filter ? <IoIosArrowDroprightCircle /> : <IoIosArrowDropdownCircle />}
        Filter by status
      </div>
      <div>
        {!filter ? (
          <div className="flex flex-col ml-6">
            <RadioButton label="Alive" name="status" />
            <RadioButton label="Dead" name="status" />
            <RadioButton label="Unknown" name="status" />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default FilterByStatus;
