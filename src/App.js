import React from "react";

import Home from "./pages/home";
import Locations from "./pages/locations";
import Route from "./router/route";

function App() {
  return (
    <div>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/locations">
        <Locations />
      </Route>
    </div>
  );
}

export default App;
