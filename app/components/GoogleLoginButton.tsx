"use client";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../lib/firebase";
import { createUserIfNotExists } from "../lib/userService";

export default function GoogleLoginButton() {
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      await createUserIfNotExists(result.user)
      console.log("Signed in!");
    } catch (err) {
      console.error("Login error:", err);
    }
  };

  return (
    <button
      onClick={signInWithGoogle}
      className="px-4 py-2 bg-blue-600 text-white rounded-lg"
    >
      Sign in with Google
    </button>
  );
}