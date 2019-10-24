// import React, { useState, useEffect } from "react";
// import firebase from "../firebase";
// // import { TextField } from "@material-ui/core";
// // import Button from "@material-ui/core/Button";
// // import { makeStyles } from "@material-ui/core/styles";
// import Icon from "@material-ui/core/Icon";
// import styled from "styled-components";
// import TrashIcon from "@material-ui/icons/Delete";

// const Background = styled.div`
//   background: #209cee;
//   padding: 30px;
//   height: 100vh;
// `;

// const ItemStylized = styled.div`
//   background: #fff;
//   box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
//   padding: 5px 10px;
//   font-size: 12px;
//   margin-bottom: 6px;
//   border-radius: 3px;
// `;
// // text-decoration: items.isAcquired ? "line-through" : "" ;   ^ for above figure out how to make it work.

// const ItemList = styled.div`
//   background: #e8e8e8;
//   border-radius: 4px;
//   padding: 10px;
//   max-width: 400px;
//   text-align: center;
//   margin: auto;
// `;
// //fix trashcan icon
// // now to add back in acquiring item/transfering to another collection
// // refactoring/cleaning up code base

// const moveToCart = selectedItem => {
//   const [items, setItems] = useState([])

//   useEffect(() => {
//     let unsubscribe = firebase
//     .firestore()
//     .collection('shopping-list-db')
//     .doc(id)
//     .where('id', '==', )
//   })
// }

// function Item({ item, moveToCart, deleteItem }) {
//   return (
//     <ItemStylized

//     // style={{ textDecoration: item.isAcquired ? "line-through" : "" }}
//     >
//       {item.value}
//       <div id={item.id}>
//         <Icon onClick={moveToCart}>
//           {item.list === "grocery" ? `shopping_cart` : null}
//         </Icon>
//         <TrashIcon onClick={deleteItem} />
//       </div>
//     </ItemStylized>
//   );
// }
// // Old AddItem useEffect function
// function AddItem() {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     //Creates array of documents within Shopping List DB
//     const unsubscribe = firebase
//       .firestore()
//       .collection("shopping-list-db")
//       .onSnapshot(snapshot => {
//         const newItems = snapshot.docs.map(doc => ({
//           id: doc.id,
//           ...doc.data()
//           // add a time aspect that we can than use for sorting inately by time on order.
//           // since on the internal end index is constantly changing in firebase
//         }));
//         setItems(newItems);
//       });
//     return () => unsubscribe();
//   }, []);
//   return items;
// }

// function ItemForm() {
//   const [value, setValue] = useState("");

//   const handleSubmit = e => {
//     e.preventDefault();

//     firebase
//       .firestore()
//       .collection("shopping-list-db")
//       .add({
//         //prop type of string and possibly number (ex: 3 chickens as an item)
//         value,
//         //prop type of list -> for icon styling purposes
//         list: "grocery"
//       })
//       .then(() => {
//         setValue("");
//       });
//     // just html from before displaying but not linked to Firebase
//     // if (!value) return;
//     // addItem(value);
//     // setValue("");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={value}
//         placeholder={"Add to your List"}
//         onChange={e => setValue(e.target.value)}
//       />
//     </form>
//   );
// }

// const moveToCart = e => {
//   e.preventDefault();
//   let id = e.target.parentElement.getAttribute("id");
//   let value = firebase
//     .firestore()
//     .collection("grocery-list-db")
//     .doc(id)
//     .get();
//   console.log(value);
//   firebase
//     .firestore()
//     .collection("cart-list-db")
//     .add({
//       //prop type of string and possibly number (ex: 3 chickens as an item)
//       value,
//       //prop type of list -> for icon styling purposes
//       list: "cart"
//     })
//     .then(() => {
//       firebase
//         .firestore()
//         .collection("shopping-list-db")
//         .doc(id)
//         .delete();
//     });
// };

// const deleteItem = e => {
//   e.stopPropagation();
//   //for delete it'll be parentElement (x2) due to teh trashcan Icon having an extra svg
//   let id = e.target.parentElement.parentElement.getAttribute("id");
//   firebase
//     .firestore()
//     .collection("shopping-list-db")
//     .doc(id)
//     .delete();

//   // const newList = [...items, items.filter(item => item !== index)];
//   // setItems(newList);
// };

// function List() {
//   const shoppingListItems = AddItem();
//   //future items lists cart & receipt for displaying

//   return (
//     <Background>
//       <ItemList>
//         <ItemForm />
//         {shoppingListItems.map(item => (
//           <Item
//             key={item.id}
//             item={item}
//             moveToCart={moveToCart}
//             deleteItem={deleteItem}
//           />
//         ))}
//       </ItemList>
//     </Background>
//   );
// }

// export default List;
