import React from "react";
import CharacterCard from "./character-card";
import { GoDotFill } from "react-icons/go";
import CharacterContext from "../context/character-context";

function RenderCard() {
  const { fetchCharacter, characterData } = React.useContext(CharacterContext);

  React.useEffect(() => {
    fetchCharacter();
  }, []);

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
    <div className="flex flex-wrap justify-center bg-[#272B33]">
      {characterData.map((character) => {
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
