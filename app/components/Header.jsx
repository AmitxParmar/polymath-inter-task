"use client";
import React from "react";
import { UserAuth } from "../hooks/useAuth";
import { useRouter, redirect } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const { googleSignIn, user, logOut } = UserAuth();

  const handleGoogleLogin = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
      redirect("/");
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut().then(() => router.push("/"));
    } catch (error) {
      console.log(error);
    }
  };

/*   React.useEffect(() => {
    if (user) {
      router.replace("/dashboard");
    } else {
      redirect("/");
    }
  }, [user]); */

  return (
    <header className="bg-[#ccc]/25 shadow-md flex py-2 px-6 md:px-12 flex-row-reverse h-26 ">
      <div className="bg-black duration-500 hover:border-[#ccc] hover:bg-white transition-all border-white hover:text-black border hover:shadow-2xl text-white rounded-full">
        {!user ? (
          <button onClick={handleGoogleLogin}>
            <p className="px-6 md:px-12 py-2 font-semibold uppercase">login</p>
          </button>
        ) : (
          <button onClick={handleSignOut}>
            <p className="px-6 md:px-12 py-2 leading-normal font-semibold uppercase">
              logout
            </p>
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
