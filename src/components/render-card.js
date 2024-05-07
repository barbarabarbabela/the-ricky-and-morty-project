import React from "react";
import CharacterCard from "./character-card";
import { GoDotFill } from "react-icons/go";
import CharacterContext from "../context/character-context";
import useCharacterContext from "../hooks/use-character-context";
import useFilter from "../hooks/use-filter";

function RenderCard() {
  const { characterData } = useCharacterContext();
  const { selectedFilter } = useFilter();

  const statusIcon = (character) => {
    if (character.status === "Alive") {
      return (
        <div className="text-green-600 flex items-center gap-1">
          <GoDotFill className="motion-safe:animate-ping" /> {character.status}
        </div>
      );
    }
    if (character.status === "unknown") {
      return (
        <div className="text-yellow-600 flex items-center gap-1">
          <GoDotFill className="motion-safe:animate-ping" /> Unknown
        </div>
      );
    }

    if (character.status === "Dead") {
      return (
        <div className="text-red-600 flex items-center gap-1">
          <GoDotFill className="motion-safe:animate-ping" /> Dead
        </div>
      );
    }
  };

  return (
    <div className="flex flex-wrap justify-center m-10 gap-10">
      {selectedFilter === null &&
        characterData.map((character) => {
          return (
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
          );
        })}
      {selectedFilter === "dead" &&
        characterData
          .filter((character) => character.status === "Dead")
          .map((character) => {
            return (
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
            );
          })}
      {selectedFilter === "alive" &&
        characterData
          .filter((character) => character.status === "Alive")
          .map((character) => {
            return (
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
            );
          })}
      {selectedFilter === "unknown" &&
        characterData
          .filter((character) => character.status === "unknown")
          .map((character) => {
            return (
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
            );
          })}
      {selectedFilter === "human" &&
        characterData
          .filter((character) => character.species === "Human")
          .map((character) => {
            return (
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
            );
          })}
      {selectedFilter === "alien" &&
        characterData
          .filter((character) => character.species === "Alien")
          .map((character) => {
            return (
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
            );
          })}
    </div>
  );
}

export default RenderCard;
