import React, { useState, useContext, useEffect, createContext, type ReactNode } from "react";
import { auth } from "../../firebase/firebaseConfig";
import { onAuthStateChanged, type User } from "firebase/auth";
import { getFirestore, doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db } from "../../firebase/firebaseConfig"; // Ensure db is initialized correctly

// Auth context type definition
interface AuthContextType {
  currentUser: User | null;
  userLoggedIn: boolean;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [userLoggedIn, setUserLoggedIn] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const storeUserInFirestore = async (user: User) => {
    try {
      const userRef = doc(db, "users", user.uid); // Reference to the user's document
      await setDoc(userRef, {
        uid: user.uid,
        email: user.email,
        name: user.displayName || `Jurnlet User ${user.uid.slice(0, 8)}`, // Store the name or fall back to user.uid
        createdAt: serverTimestamp(), // Automatically add the creation timestamp
      });
      console.log("User data saved successfully!");
    } catch (error) {
      console.error("Error saving user data:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      setUserLoggedIn(!!user);
      setLoading(false);

      // If a user is logged in, store their data in Firestore
      if (user) {
        await storeUserInFirestore(user);
      }
    });

    return () => unsubscribe(); // Clean up the listener when the component is unmounted
  }, []);

  const value = { currentUser, userLoggedIn, loading };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
