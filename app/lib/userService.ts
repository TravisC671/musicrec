import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";
import { User } from "firebase/auth";

export async function createUserIfNotExists(user: User) {
  console.log(user);

  const userRef = doc(db, "users", user.uid);
  const userSnap = await getDoc(userRef);

  const usernameRef = doc(db, "usernames", user.uid);
  const usernameSnap = await getDoc(usernameRef);

  if (!userSnap.exists() && !usernameSnap.exists()) {
    await setDoc(userRef, {
      uid: user.uid,
      username: user.uid,
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      createdAt: serverTimestamp(),
    });

    await setDoc(usernameRef, {
      uid: user.uid,
    });
  } else {
    throw new Error("username or user already exists");
  }
}

export async function checkUsername(username: string): Promise<boolean> {
  const usernameRef = doc(db, "usernames", username);
  const usernameSnap = await getDoc(usernameRef);

  if (usernameSnap.exists()) return true;
  return false;
}
