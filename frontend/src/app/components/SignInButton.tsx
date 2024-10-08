// components/SignInButton.tsx
"use client"; // This component should be client-side

import React from "react";
import { auth } from "../../lib/firebase"; // Adjust the path as needed
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const SignInButton: React.FC = () => {
  const provider = new GoogleAuthProvider();

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User info: ", user);
      // You can also save user info in your app state or context
    } catch (error) {
      console.error("Error signing in: ", error);
    }
  };

  return (
    <button
      onClick={signInWithGoogle}
      className="bg-blue-500 text-white p-2 rounded"
    >
      Sign in with Google
    </button>
  );
};

export default SignInButton;
