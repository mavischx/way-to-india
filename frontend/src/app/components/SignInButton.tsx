// components/SignInButton.tsx
"use client"; // This component should be client-side
import React from "react";
import Image from 'next/image';
import { auth } from "../../lib/firebase"; // Adjust the path as needed
import { GoogleAuthProvider, OAuthProvider, signInWithPopup } from "firebase/auth";
import AppleIcon from "@/assets/images/apple-logo.png";
import GoogleIcon from "@/assets/images/google.png";

const SignInButtonGoogle: React.FC = () => {
  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
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
      className="bg-transparent text-black px-6 py-2 rounded-xl border flex items-center justify-center space-x-1"
    >
      <Image
        src={GoogleIcon}
        alt={"GoogleIcon"}
        width={24}
        height={24}
        className="" />
      <span className="pl-2">Sign in with Google</span>

    </button>

  );
};

const SignInButtonApple: React.FC = () => {
  const appleProvider = new OAuthProvider('apple.com');

  const signInWithApple = async () => {
    try {
      const result = await signInWithPopup(auth, appleProvider);
      const user = result.user;
      console.log("User info: ", user);
      // You can also save user info in your app state or context
    } catch (error) {
      console.error("Error signing in: ", error);
    }
  };

  return (
    <button
      onClick={signInWithApple}
      className="bg-transparent text-black px-6 py-2 rounded-xl border flex items-center justify-center space-x-1"
    >
      <Image
        src={AppleIcon}
        alt={"AppleIcon"}
        width={24}
        height={24} />
      <span className="pl-2">Sign in with Apple</span>
    </button>
    

  );
};

export { SignInButtonGoogle, SignInButtonApple };