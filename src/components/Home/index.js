import React from "react";
import List from "../List.js";
import Draggable from "../Draggable.js";
import Firebase from "../Firebase";

//button onclick was added in prior iteration of firebase authorization look into fixing later

const Home = () => (
  <div>
    <List />
    <Draggable />
    <button onClick={() => Firebase.auth().signOut()}>Sign out</button>
  </div>
);

export default Home;
