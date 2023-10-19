"use client"
import React, { useEffect, useState } from "react";
import { BsWindowSidebar } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";

const extractVideoId = (link: any) => {
  const regex = /[?&]v=([^&]+)/;
  const match = link.match(regex);
  return match && match[1];
};

export default function ChatsDrawer() {
  const [data, setData] = useState({
    videoLink: "",
  });
  useEffect(() => {
    const savedVideoLink = localStorage.getItem("videoLink");
    const extractedVideoId = extractVideoId(savedVideoLink);

    setData((prevState) => ({
      ...prevState,
      videoLink: savedVideoLink || "",
    }));

    // if (savedVideoLink) {
    //   getTranscript(savedVideoLink);
    // }
  }, []);
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
    </div>
  );
}
