import axios from "axios";
import { createContext, useState } from "react";

const CharacterContext = createContext();

function Provider({ children }) {
  const [characterData, setCharacterData] = useState([]);

  const fetchCharacter = async () => {
    const response = await axios.get(
      "https://rickandmortyapi.com/api/character"
    );

    setCharacterData(response.data.results);
  };

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

export { Provider };
export default CharacterContext;
