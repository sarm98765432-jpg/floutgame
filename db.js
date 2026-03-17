// Firebase DB
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA5VzR8Ek8qd8zfmaexv5kcW2kEYwkcLDk",
  authDomain: "http://flour-casino.firebaseapp.com",
  projectId: "http://flour-casino.firebasestorage.app",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// USER
export async function getUser(userId) {
  const ref = doc(db, "users", userId.toString());
  const snap = await getDoc(ref);

  if (!snap.exists()) {
    await setDoc(ref, {
      balance: 1000,
      name: "player"
    });
    return { balance: 1000 };
  }

  return snap.data();
}

// UPDATE BALANCE
export async function updateBalance(userId, newBalance) {
  const ref = doc(db, "users", userId.toString());
  await updateDoc(ref, {
    balance: newBalance
  });
}