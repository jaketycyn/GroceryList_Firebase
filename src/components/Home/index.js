import React from "react";
import List from "../List.js";
import { Header } from "../layout/header.js";
import Draggable from "../Draggable.js";
import Firebase from "../Firebase";

//button onclick was added in prior iteration of firebase authorization look into fixing later

export const Home = () => (
  <div>
    <Header />
    <List />
    <Draggable />
    <button onClick={() => Firebase.auth().signOut()}>Sign out</button>
  </div>
);
