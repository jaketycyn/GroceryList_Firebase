import React from "react";
import Firebase from "../Firebase";

//add <List /> back in later once all authroization is set up.
//import List from "../List.js";
import Draggable from "../Draggable.js";

//button onclick was added in prior iteration of firebase authorization look into fixing later

const Home = () => (
  <div>
    <Draggable />
    <button onClick={() => Firebase.auth().signOut()}>Sign out</button>
  </div>
);

export default Home;
