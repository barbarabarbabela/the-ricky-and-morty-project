import React from "react";
import Header from "../components/header";
import NavBar from "../components/nav-bar";
import { IoMdMenu } from "react-icons/io";
import FilterMenu from "../components/filter-menu";

function PageLayout({ children }) {
  const [isExpansible, setIsExpansible] = React.useState(false);

  const handleMenu = () => {
    setIsExpansible(!isExpansible);
  };

  return (
    <div className="bg-[#272B33]">
      <Header />
      <NavBar />
      <div className="flex">
        <div className="bg-primary p-4">
          <IoMdMenu
            className="h-7 w-12 cursor-pointer motion-safe:animate-bounce"
            onClick={handleMenu}
          />
          {isExpansible ? <FilterMenu /> : null}
        </div>
        {children}
      </div>
    </div>
  );
}

export default PageLayout;
