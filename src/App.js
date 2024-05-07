import React from "react";

import LocationsPage from "./pages/locations-page";
import Route from "./router/route";
import CharacterPage from "./pages/character-page";

function App() {
  return (
    <div>
      <Route path="/">
        <CharacterPage />
      </Route>
      <Route path="/locations">
        <LocationsPage />
      </Route>
    </div>
  );
}

export default App;
