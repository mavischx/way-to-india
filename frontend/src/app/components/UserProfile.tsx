// components/UserProfile.tsx
"use client"; // This component should be client-side
import React from "react";
import { useAuth } from "../../context/AuthContext";
import Image from 'next/image';
import SignupForm from "@/app/components/auth/SignUpForm"

const UserProfile: React.FC = () => {
  const { user } = useAuth();

  if (!user) {
    return <div>
      <SignupForm />
    </div>;
  }

  return (
    <div>
      {user.photoURL && (
        <Image
          src={user.photoURL}
          alt={user.displayName || 'User'}
          width={96}
          height={96}
        />
      )}
      <p>{user.displayName || 'Anonymous User'}</p>
    </div>
  );
};

export default UserProfile;