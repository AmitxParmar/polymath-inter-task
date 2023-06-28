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
    <div className="bg-gray-200 min-h-screen h-full p-3 md:p-12">
      <div className="bg-gray-100/90 p-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 rounded-xl only:flex">
        {/* <div className="h-screen text-center min-w-full relative w-full text-5xl font-medium">
          No Saved Todos!!!
        </div> */}
        {todos ? (
          todos.map((todo) => (
            <div
              className="bg-gray-100 px-4 py-4 shadow-xl drop-shadow-xl border border-t-2 rounded-2xl min-h-full hover:bg-gray-200 hover:scale-105 duration-500 transition-all hover:cursor-pointer"
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
          ))
        ) : (
          <div className="h-screen w-full bg-black text-5xl text-white">
            No Saved Todos!!!
          </div>
        )}
      </div>
    </div>
  );
};

export default Todos;
