import { useContext } from "react";
import CharacterContext from "../context/character-context";

function useCharacterContext() {
  return useContext(CharacterContext);
}

export default useCharacterContext;
