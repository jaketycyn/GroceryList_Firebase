import React from "react";
import List from "./components/List.js";
import { Header } from "./components/layout/header.js";
import firebase from "./firebase";

export const App = () => (
  <div>
    <Header />
    <List />
  </div>
);
