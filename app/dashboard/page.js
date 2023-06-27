"use client";
import React, { useEffect, useState } from "react";
import { UserAuth } from "../hooks/useAuth";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const [todos, setTodos] = useState([]);
  const router = useRouter();
  const { user } = UserAuth();

  useEffect(() => {
    !user ? router.push("/") : null;
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => setTodos(json));
  }, []);

  const handleSave = async (id) => {
    const task = todos.find((todo) => item.id === id);

    try {
      const docRef = await addDoc(collectionRef, task);
      console.log("Object saved with ID:", docRef.id);
    } catch (error) {
      console.error("Error saving object:", error);
    }
  };

  return (
    <div className="min-h-screen py-12 px-6">
      Hello, {user?.displayName}
      <div className="bg-gray-500/30 rounded-lg">
        {todos?.map((todo) => (
          <div
            className="bg-gray-100"
            onClick={() => handleSave(todo.id)}
            key={todo.id}
          >
            <h3>{todo.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
