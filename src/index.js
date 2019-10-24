import React from "react";
import { render } from "react-dom";
import { App } from "./components/App";
import Firebase, { FirebaseContext } from "./components/Firebase";

const rootElement = document.getElementById("root");
render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  rootElement
);
