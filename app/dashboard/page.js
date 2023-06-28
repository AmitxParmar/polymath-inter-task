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
    <div className="min-h-screen py-12 px-6">
      <ToastContainer />
      Hello, {user?.displayName}
      <div className="bg-gray-500/30 grid grid-cols-4 auto-rows-auto gap-4 space-y-3 py-12 px-5 rounded-lg">
        {todos?.map((todo) => (
          <div
            className="bg-gray-100 px-4 py-4 shadow-xl rounded-2xl hover:bg-gray-200 hover:scale-105 duration-500 transition-all hover:cursor-pointer flex flex-col justify-around"
            key={todo.id}
          >
            <div className="flex flex-col ">
              <div className="flex flex-col justify-around gap-y-3 px-4 py-3 border border-[#ccc] rounded-lg">
                <h6 className="text-sm">{todo.title}</h6>
                <div className={`${todo.completed ? 'bg-green-200': "bg-red-300" } rounded-full px-4 p-1 text-xs w-fit` }>
                  {todo.completed ? (
                    <p className="">Completed!</p>
                  ) : (
                    <p className="">Not Completed!!</p>
                  )}
                </div>
              </div>

              <button
                className="bg-black rounded-lg hover:bg-white hover:text-black text-white border border-[#ccc]"
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
