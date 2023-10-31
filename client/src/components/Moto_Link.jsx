import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export default function Moto_Link() {
  const [videoLink, setVideoLink] = useState(""); // State to store the input value
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleInputChange = (e) => {
    setVideoLink(e.target.value);
  };

  const handleButtonClick = () => {
    // Check if the input value is a valid YouTube link (you can add more validation as needed)
    if (isValidYouTubeLink(videoLink)) {
      // Save the input value to localStorage
      localStorage.setItem("videoLink", videoLink);

      // Redirect to the "/chat" route using the navigate function
      navigate("/chat");
    } else {
      alert("Please enter a valid YouTube link.");
    }
  };

  // Function to validate YouTube links
  const isValidYouTubeLink = (link) => {
    // You can implement a more robust link validation logic here
    // For simplicity, this example checks if the link contains "youtube.com"
    return link.includes("youtube.com");
  };

  return (
    <div className="w-full flex flex-col justify-center items-center md:p-9 mt-9">
      <div className="font-bold flex flex-col items-center gap-2 text-white mt-6">
        <h1 className="text-3xl md:text-4xl lg:text-6xl text-center">Learn more from videos with AI</h1>
        <h2 className="text-md md:text-xl lg:text-3xl text-center">
          Get a summary . Ask questions . Quiz yourself.
        </h2>
      </div>

      <div className="mt-10 lg:mt-16 w-full lg:w-[50%] gap-1 flex justify-center">
        <input
          placeholder="Enter the video link"
          type="text"
          className="p-2 lg:p-4 border-[1px] md:w-[50%] lg:w-[80%] rounded-lg placeholder-white placeholder-opacity-100 bg-gray-500"
          value={videoLink}
          onChange={handleInputChange}
        />
        <button
          onClick={handleButtonClick}
          className="p-2 lg:p-4 bg-[#3B5594] font-bold rounded-lg text-white focus:outline-none text-[10px] lg:text-[18px]"
        >
          Get started
        </button>
      </div>
    </div>
  );
}
