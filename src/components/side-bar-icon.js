import React from "react";
import { IoMdMenu } from "react-icons/io";
import FilterMenu from "./filter-menu";

function SideBarIcon() {
  const [isExpansible, setIsExpansible] = React.useState(false);

  const handleMenu = () => {
    setIsExpansible(!isExpansible);
  };

  return (
    <div className="bg-primary p-4">
      <IoMdMenu
        className="h-7 w-12 cursor-pointer motion-safe:animate-bounce"
        onClick={handleMenu}
      />
      {isExpansible ? <FilterMenu /> : null}
    </div>
  );
}

export default SideBarIcon;
