"use client";
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/app/lib/firebase-config";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const todosRef = collection(db, "todos");
      const snapShot = await getDocs(todosRef);
      snapShot.forEach((doc) => {
        console.log(doc.data());
        setTodos((prev) => [...prev, doc.data()]);
      });
    };
    fetchTodos();
  }, []);

  return (
    <div className="bg-gray-200 min-h-screen p-12">
      <div className="bg-gray-100/90 p-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-[repeat(auto-fill,minmax(300px,2fr))] gap-5  rounded-xl">
        {todos?.map((todo) => (
          <div
                className="bg-gray-100 px-4 py-4 shadow-xl drop-shadow-xl border border-t-2 rounded-2xl hover:bg-gray-200 hover:scale-105 duration-500 transition-all hover:cursor-pointer "
            key={todo.id}
          >
            <div className="flex flex-col justify-between h-full">
              <div className="relative flex flex-col gap-y-3 px-4 py-3 border border-[#ccc] rounded-lg">
                <h6 className="text-sm tracking-tighter line-clamp-3">
                  {todo?.title}
                </h6>
                <div
                  className={`${
                    todo?.completed ? "bg-green-200" : "bg-red-300"
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

export default Todos;
