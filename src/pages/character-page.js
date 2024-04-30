import React from "react";
import RenderCard from "../components/render-card";
import UtilityBar from "../components/utility-bar";
import FilterMenu from "../components/filter-menu";

function CharacterPage() {
  return (
    <div className="flex">
      <FilterMenu />
      <RenderCard />
    </div>
  );
}

export default CharacterPage;
