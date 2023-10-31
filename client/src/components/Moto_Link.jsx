import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoLogoYoutube } from "react-icons/io";
import { motion } from "framer-motion";
import { IoSend } from "react-icons/io5"

export default function Moto_Link() {
  const [videoURL, setVideoURL] = useState("");
  const navigate = useNavigate(); // Initialize the useNavigate hook
  function setVideo() {
    if (videoURL !== "") {
      localStorage.setItem("videoLink", videoURL);
      navigate('/chat');
    }
  }

  return (
    <div className="w-full flex flex-col relative justify-center items-center p-2 md:p-9 mt-9">
      <div className="font-bold flex flex-col items-center gap-2 text-white mt-6">
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: -100, filter: "blur(2px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0)" }
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0, ease: "easeInOut" }}
          className="text-3xl md:text-4xl lg:text-6xl text-center">Learn more from videos with AI
        </motion.h1>
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: -100, filter: "blur(2px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0)" }
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
          className="text-md md:text-xl lg:text-3xl text-center">
          Get a summary . Ask questions . Quiz yourself.
        </motion.h2>
      </div>


      <div className="w-full flex-1 h-full flex items-center flex-col">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -100, filter: "blur(2px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0)" }
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
          className="font-semibold text-3xl text-gray-300 my-10">RecapAI
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0,transform:"scale(0.6)", filter: "blur(2px)" },
            visible: { opacity: 1,transform:"scale(1)", filter: "blur(0)" }
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 1.5, ease: "easeInOut" }}
          className="w-full md:max-w-[600px] mb-6 relative bg-gray-700/60 backdrop-blur border border-gray-600 rounded p-4 flex flex-col">
          <label
            htmlFor="input-group-1"
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
              onChange={(e) => { setVideoURL(e.target.value) }}
              className="border border-gray-300 focus:shadow-md focus:outline-none text-gray-900 text-sm rounded-lg focus:ring-opacity-0 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 focus:border-gray-400 dark:placeholder-gray-400 dark:text-white"
              placeholder="https://www.youtube.com/watch?v"
            />
            <button onClick={() => setVideo()} className="p-2 absolute right-2 text-gray-500 hover:text-gray-400" type="button">
              <IoSend />
            </button>
          </div>
        </motion.div>
        {/* <div className="w-full md:max-w-[600px] relative border border-gray-600 rounded p-4 flex flex-col">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Summarize your project
          </label>
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="dropzone-file"
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
        </div> */}
      </div>
    </div>
  );
}
