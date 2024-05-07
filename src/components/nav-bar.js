import React from "react";
import Link from "./link";

function NavBar() {
  const links = [
    {
      label: "Characters",
      path: "/",
    },
    {
      label: "Locations",
      path: "/locations",
    },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <Link
        key={link.label}
        to={link.path}
        className="hover:text-primary cursor-pointer"
      >
        {link.label}
      </Link>
    );
  });
  return (
    <div className="flex gap-72 bg-[#b2b0b1af]  text-xl font-bold justify-center">
      {renderedLinks}
    </div>
  );
}

export default NavBar;
