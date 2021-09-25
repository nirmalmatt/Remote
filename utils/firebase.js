// src/services/firebase.ts
import { initializeApp } from "@firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  onSnapshot,
  setDoc,
  updateDoc,
  doc,
  serverTimestamp,
  getDoc,
  deleteDoc
} from "firebase/firestore";
import { writable } from "svelte/store";
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut
} from "firebase/auth";
const config = {
  apiKey: "AIzaSyDkrVV8Upr_UyjxhxHpf7ouVScZpoZPsTY",
  authDomain: "grequel-controller.firebaseapp.com",
  projectId: "grequel-controller",
  storageBucket: "grequel-controller.appspot.com",
  messagingSenderId: "24794021032",
  appId: "1:24794021032:web:0b7b932ad95546243ad69d",
  measurementId: "G-XFQBBZNEEM"
};

export const app = initializeApp(config);
export const db = getFirestore(app);

// Auth
export async function signIn() {
  // sign in with google method
  var provider = new GoogleAuthProvider();
  await signInWithPopup(getAuth(app), provider);
}

// creating state for handling auth
export const auth = writable(getAuth(app));

export function signOutUser() {
  // method for signing out
  signOut(getAuth(app));
}
export function initFirebaseAuth() {
  // Listen to auth state changes.
  onAuthStateChanged(getAuth(), authStateObserver);
}
function authStateObserver() {
  // updates auth state
  auth.update((_) => getAuth());
}

// Firestore
export const rooms = writable([]);
export function loadRooms() {
  rooms.update((d) => []);
  const roomsQuery = query(collection(db, "boards"));
  onSnapshot(roomsQuery, function (snapshot) {
    snapshot.docChanges().forEach(function (change) {
      if (change.type === "removed") {
        //
      } else {
        var data = change.doc.data();
        var id = change.doc.id;
        rooms.update((d) => [...d, { ...data, id }]);
      }
    });
  });
  return [];
}

// update data
export async function toggleSwitch(room, id, data) {
  await setDoc(doc(db, `boards/${room}/switches`, id), {
    label: data.label,
    state: !data.state,
    type: data.type
  });
}

// create new switch
export async function createSwitchDoc(roomId, label, pin) {
  // const roomRef = doc(collection(db, `boards/${roomId}/switches`));
  await addDoc(collection(db, `boards/${roomId}/switches`), {
    label: label,
    state: false,
    pin: pin,
    type: "sw"
  });
}

export async function removeSwitch(room, id) {
  // removes switches
  await deleteDoc(doc(db, `boards/${room}/switches`, id));
}
