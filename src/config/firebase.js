import * as firebase from "firebase";

import { FirebaseConfig } from "./Keys";
firebase.initializeApp(FirebaseConfig);

const databaseRef = firebase.database().ref();
export const usersRef = databaseRef.child("users");