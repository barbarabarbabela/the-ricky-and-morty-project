import React from "react";
import Header from "../components/header";
import NavBar from "../components/nav-bar";
import SideBarIcon from "../components/side-bar-icon";

function PageLayout({ children }) {
  return (
    <div className="bg-[#272B33]">
      <Header />
      <NavBar />
      <div className="flex">
        <SideBarIcon />
        {children}
      </div>
    </div>
  );
}

export default PageLayout;
