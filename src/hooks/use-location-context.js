import { useContext } from "react";
import LocationContext from "../context/location-context";

function useLocationContext() {
  return useContext(LocationContext);
}

export default useLocationContext;
