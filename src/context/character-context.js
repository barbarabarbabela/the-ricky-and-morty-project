import axios from "axios";
import { createContext, useEffect, useState } from "react";

const CharacterContext = createContext();

function CharacterProvider({ children }) {
  const [characterData, setCharacterData] = useState([]);

  const fetchCharacter = async () => {
    const response = await axios.get(
      "https://rickandmortyapi.com/api/character"
    );

    setCharacterData(response.data.results);
  };

  useEffect(() => {
    fetchCharacter();
  }, []);

  const valueToShare = {
    characterData,
    fetchCharacter,
  };

  return (
    <CharacterContext.Provider value={valueToShare}>
      {children}
    </CharacterContext.Provider>
  );
}

export { CharacterProvider };
export default CharacterContext;
