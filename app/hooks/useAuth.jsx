"use client";
import { useContext, createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "@/app/lib/firebase-config";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState({});

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(() => router.push("/dashboard"));
    //signInWithRedirect(auth, provider);
  };

  const logOut = () => {
    signOut(auth).then(() => router.push("/"));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ googleSignIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
