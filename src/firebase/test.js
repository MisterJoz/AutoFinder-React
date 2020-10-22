import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("Fxe371kHsoI2irVN0FR2")
  .collection("cartItems")
  .doc("HL4SCgkGse3HpTDatdIS");

firestore.doc("/users/Fxe371kHsoI2irVN0FR2/cartItems/HL4SCgkGse3HpTDatdIS");
