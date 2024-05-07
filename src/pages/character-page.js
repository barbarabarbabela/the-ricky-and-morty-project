import React from "react";
import RenderCard from "../components/render-card";
import PageLayout from "./page-layout";
import { FilterProvider } from "../context/filter-context";
import { CharacterProvider } from "../context/character-context";

function CharacterPage() {
  return (
    <CharacterProvider>
      <FilterProvider>
        <PageLayout>
          <RenderCard />
        </PageLayout>
      </FilterProvider>
    </CharacterProvider>
  );
}

export default CharacterPage;
