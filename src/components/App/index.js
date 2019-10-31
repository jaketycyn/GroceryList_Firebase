import React from "react";
import Firebase, { FirebaseContext } from "../Firebase";

import SignUp from "../SignUp";
//import List from "../List.js";

const App = () => (
  <FirebaseContext.Provider value={new Firebase()}>
    <SignUp />
  </FirebaseContext.Provider>
);

export default App;
