"use client"
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoLogoYoutube } from "react-icons/io";
import {IoSend} from "react-icons/io5"

export default function ChatArea() {
  const [videoURL,setVideoURL] = useState("");
  const router = useRouter();
  function setVideo(){
    if(videoURL !== ""){
      localStorage.setItem("videoLink",videoURL);
      router.push('/chat/test');
    }
  }
  return (
    <div className="w-full flex-1 h-full flex items-center flex-col">
      <div className="font-semibold text-3xl text-gray-700 my-10">RecapAI</div>
      <div className="w-full md:max-w-[600px] mb-6 relative border border-gray-600 rounded p-4 flex flex-col">
        <label
          html-for="input-group-1"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Explore and Recap YouTube Video
        </label>
        <div className="relative mb-6 flex items-center">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
            <IoLogoYoutube className="text-gray-500 dark:gray-400" />
          </div>
          <input
            type="text"
            id="input-group-1"
            onChange={(e)=>{setVideoURL(e.target.value)}}
            className="border border-gray-300 focus:shadow-md focus:outline-none text-gray-900 text-sm rounded-lg focus:ring-opacity-0 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 focus:border-gray-400 dark:placeholder-gray-400 dark:text-white"
            placeholder="https://www.youtube.com/watch?v"
          />
          <button onClick={()=>setVideo()} className="p-2 absolute right-2 text-gray-500 hover:text-gray-400" type="button">
            <IoSend/>
          </button>
        </div>
      </div>
      <div className="w-full md:max-w-[600px] relative border border-gray-600 rounded p-4 flex flex-col">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Summarize your project
        </label>
        <div className="flex items-center justify-center w-full">
          <label
            html-for="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                PDF, PowerPoint, Word, and Excel files
              </p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>
      </div>
    </div>
  );
}
