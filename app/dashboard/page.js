"use client";
import React, { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../lib/firebase-config";
import { UserAuth } from "../hooks/useAuth";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Dashboard = () => {
  const [todos, setTodos] = useState([]);
  const router = useRouter();
  const { user } = UserAuth();

  useEffect(() => {
    !user ? router.push("/") : null;
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setTodos(json));
  }, []);

  const collectionRef = collection(db, "todos");

  const handleSave = async (id) => {
    const task = todos.find((todo) => todo.id === id);

    try {
      const docRef = await addDoc(collectionRef, task).then(() =>
        toast("Todo saved!!")
      );
      console.log("Object saved with ID:", docRef.id);
    } catch (error) {
      console.error("Error saving object:", error);
    }
  };

  return (
    <div className="min-h-screen  py-12 px-6">
      <ToastContainer />
      Hello, {user?.displayName}
      <div className="bg-gray-500/30 grid grid-cols-4 gap-4 space-y-3 py-4 px-5 rounded-lg">
        {todos?.map((todo) => (
          <div
            className="bg-gray-100 hover:bg-gray-200 hover:cursor-pointer"
            key={todo.id}
          >
            <div className="grid grid-flow-col">
              <h3>{todo.title}</h3>
              <button
                className="bg-black rounded-sm hover:bg-white hover:text-black text-white max-w-[100px]"
                onClick={() => handleSave(todo.id)}
              >
                Save
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
