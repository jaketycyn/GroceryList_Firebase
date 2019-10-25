import React, { useState } from "react";
import Firebase from "./Firebase";

export default function ItemForm() {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    Firebase.firestore()
      .collection("shopping-list-db")
      .add({
        //prop type of string and possibly number (ex: 3 chickens as an item)
        value,
        //prop type of list -> for icon styling purposes
        list: false,
        timestamp: new Date()
      })
      .then(() => {
        setValue("");
      });
    // just html from before displaying but not linked to Firebase
    // if (!value) return;
    // addItem(value);
    // setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        placeholder={"Add to your List"}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}
