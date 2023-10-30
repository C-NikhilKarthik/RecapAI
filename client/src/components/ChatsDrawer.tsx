"use client";
import React, { useEffect, useState } from "react";
import { BsWindowSidebar, BsThreeDots } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import {LuHistory} from "react-icons/lu"

export default function ChatsDrawer() {
  const [sessions, setSessions] = useState<
    { Name: string; session: string; date: Date }[]
  >([]);
  return (
    <div className="h-full p-2 bg-black w-full flex flex-col">
      <div className="flex gap-2 text-slate-300">
        <button className="w-full items-center gap-2 flex p-3 border-slate-300 border rounded-lg">
          <IoMdAdd />
          <p className="text-sm">New Chat</p>
        </button>
        <button className="p-3 rounded-lg border-slate-200 border">
          <BsWindowSidebar className="text-xl" />
        </button>
      </div>
      <div className="flex flex-1 flex-col">
        {sessions.length === 0 ? (
          <div className="flex gap-3 p-3 items-center text-slate-300">
            <LuHistory/>
            <div className="text-sm font-semibold">No History</div>
          </div>
        ) : (
          sessions.map((session, index) => (
            <div key={index}>Session Data: {session.Name}</div>
          ))
        )}
      </div>
      <div className="flex border-t border-t-gray-200 p-3 gap-4">
        <FaUserCircle className="text-slate-400 text-2xl " />
        <div className="text-gray-300 flex-1">TheNetherAxe</div>
        <button type="button" className="p-2 text-slate-200">
          <BsThreeDots />
        </button>
      </div>
    </div>
  );
}
