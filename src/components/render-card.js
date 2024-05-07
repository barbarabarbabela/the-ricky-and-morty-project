import React from "react";
import CharacterCard from "./character-card";
import { GoDotFill } from "react-icons/go";
import useCharacterContext from "../hooks/use-character-context";
import useFilter from "../hooks/use-filter";

function RenderCard() {
  const { characterData } = useCharacterContext();
  const { selectedFilter } = useFilter();

  const filterFunctions = {
    alive: (character) => character.status === "Alive",
    dead: (character) => character.status === "Dead",
    unknown: (character) => character.status === "unknown",
    human: (character) => character.species === "Human",
    alien: (character) => character.species === "Alien",
  };

  const statusColors = {
    Alive: "text-green-600",
    unknown: "text-yellow-600",
    Dead: "text-red-600",
  };

  const statusIcon = (character) => {
    const status =
      character.status.charAt(0).toUpperCase() + character.status.slice(1);
    const statusColor = statusColors[status] || "text-yellow-600";
    return (
      <div className={`flex items-center gap-1 ${statusColor}`}>
        <GoDotFill className="motion-safe:animate-ping" /> {status}
      </div>
    );
  };

  const filteredCharacters = selectedFilter
    ? characterData.filter(filterFunctions[selectedFilter])
    : characterData;

  const renderCharacters = () => {
    return filteredCharacters.map((character) => (
      <div key={character.id}>
        <CharacterCard
          character={character.name}
          species={character.species}
          status={statusIcon(character)}
          lastLocation={character.location.name}
          firstSeen={character.origin.name}
          src={character.image}
        />
      </div>
    ));
  };

  return (
    <div className="flex flex-wrap justify-center m-10 gap-10">
      {renderCharacters()}
    </div>
  );
}

export default RenderCard;
