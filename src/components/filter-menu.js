import React from "react";
import { IoMdMenu } from "react-icons/io";
import UtilityBar from "./utility-bar";

function FilterMenu() {
  const [isExpansible, setIsExpansible] = React.useState(false);

  const handleMenu = () => {
    setIsExpansible(!isExpansible);
  };

  return (
    <div className="bg-[#FF9800] p-4 flex justify-center">
      {isExpansible ? <UtilityBar /> : null}
      <IoMdMenu
        className="h-7 w-12 cursor-pointer motion-safe:animate-bounce"
        onClick={handleMenu}
      />
    </div>
  );
}

export default FilterMenu;
