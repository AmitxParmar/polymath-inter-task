"use client";
import React from "react";
import { UserAuth } from "../hooks/useAuth";
import { useRouter } from "next/navigation";

const Dashboard = () => {

  const router = useRouter();
  const { user } = UserAuth();

  React.useEffect(() => {
    !user ? router.push("/") : null;
  }, []);

  return (
    <div className="min-h-screen py-12 px-6">Hello, {user?.displayName}
    
      <div className="bg-gray-500/30">
        
    </div>
    </div>
  );
};

export default Dashboard;
