import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "./context/character-context";
import { NavigationProvider } from "./context/navigation-context";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
  <NavigationProvider>
    <Provider>
      <App />
    </Provider>
  </NavigationProvider>
);
