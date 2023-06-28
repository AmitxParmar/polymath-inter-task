"use client";
import React, { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../lib/firebase-config";
import { UserAuth } from "../hooks/useAuth";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

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
    <div className="min-h-screen pb-6 px-6">
      <ToastContainer />
      <div className="flex flex-row-reverse my-8 justify-between">
        <h1 className="font-medium bg-yellow-100 rounded-full border border-black leading-10 px-3 py-1 hover:bg-gray-300 w-fit text-lg ">
          Hello, {user?.displayName}! <span className="text-red-900">*</span>
        </h1>
        
          <Link
            className="group relative bg-gray-500/10 rounded-sm border border-[#ccc] hover:bg-white hover:text-yellow-500 w-fit flex flex-row leading-10 px-3 py-1"
            prefetch
            href={"/dashboard/todos"}
          >
            <span>Show Saved Todos!{" "}</span>
            <span className="group-hover:translate-x-2 block group-hover:transition-all group-hover:duration-1000">{"-->"}</span>
          </Link>
        
      </div>

      <div className="bg-gray-100/90 p-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-[repeat(auto-fill,minmax(300px,2fr))] gap-5  rounded-xl">
        {todos?.map((todo) => (
          <div
            className="bg-gray-100 px-4 py-4 shadow-xl rounded-2xl hover:bg-gray-200 hover:scale-105 duration-500 transition-all hover:cursor-pointer "
            key={todo.id}
          >
            <div className="flex flex-col justify-between h-full">
              <div className="relative flex flex-col gap-y-3 px-4 py-3 border border-[#ccc] rounded-lg">
                <h6 className="text-sm tracking-tighter line-clamp-3">
                  {todo.title}
                </h6>
                <div
                  className={`${
                    todo.completed ? "bg-green-200" : "bg-red-300"
                  } rounded-full px-4 p-1 text-xs w-fit`}
                >
                  {todo.completed ? (
                    <p className="">Completed!</p>
                  ) : (
                    <p className="">Not Completed!!</p>
                  )}
                </div>
              </div>

              <button
                className="bg-black mt-4 rounded-lg hover:bg-white hover:text-black text-sm font-medium leading-none tracking-wider py-2 text-white border border-[#ccc]"
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
