// components/UserProfile.tsx
"use client"; // This component should be client-side

import React from "react";
import { useAuth } from "../../context/AuthContext";
import Image from 'next/image';
const UserProfile: React.FC = () => {
  const user = useAuth();

  if (!user) {
    return <div>Please sign in</div>;
  }

  return (
    <div>
       {user.photoURL && (
        <Image
          src={user.photoURL}
          alt={user.displayName}
          width={96}
          height={96}
        />
      )}
      <p>{user.displayName}</p>

    </div>
  );
};

export default UserProfile;
