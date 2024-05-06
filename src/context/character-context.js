import axios from "axios";
import { createContext, useEffect, useState } from "react";

const CharacterContext = createContext();

function Provider({ children }) {
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
  const fetchWithFilter = (filter) => {
    const filterBy = characterData.filter(
      (character) => character.filter === filter
    );

    return fetchWithFilter;
  };

  const valueToShare = {
    characterData,
    fetchCharacter,
    fetchWithFilter,
  };

  return (
    <CharacterContext.Provider value={valueToShare}>
      {children}
    </CharacterContext.Provider>
  );
}

export { Provider };
export default CharacterContext;
