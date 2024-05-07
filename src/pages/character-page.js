import React from "react";
import RenderCard from "../components/render-card";
import PageLayout from "./page-layout";
import { FilterProvider } from "../context/filter-context";

function CharacterPage() {
  return (
    <FilterProvider>
      <PageLayout>
        <RenderCard />
      </PageLayout>
    </FilterProvider>
  );
}

export default CharacterPage;
