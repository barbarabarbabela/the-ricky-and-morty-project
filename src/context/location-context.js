import axios from "axios";
import { createContext, useEffect, useState } from "react";

const LocationContext = createContext();

function LocationProvider({ children }) {
  const [locationData, setlocationData] = useState([]);

  const fetchLocation = async () => {
    const response = await axios.get(
      "https://rickandmortyapi.com/api/location"
    );

    console.log(response.data.results);

    setlocationData(response.data.results);
  };

  useEffect(() => {
    fetchLocation();
  }, []);

  const valueToShare = {
    locationData,
    fetchLocation,
  };

  return (
    <LocationContext.Provider value={valueToShare}>
      {children}
    </LocationContext.Provider>
  );
}

export { LocationProvider };
export default LocationContext;
