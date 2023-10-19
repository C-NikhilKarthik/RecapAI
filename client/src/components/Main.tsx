"use client";
import React, { useEffect, useState } from "react";
import { YoutubeTranscript } from "youtube-transcript";
import Chats from "./Chats";

const extractVideoId = (link: any) => {
  const regex = /[?&]v=([^&]+)/;
  const match = link.match(regex);
  return match && match[1];
};

export default function Main() {
  const [data, setData] = useState({
    videoLink: "",
    transcript: "",
  });
  const getTranscript = (videoLink: any) => {
    YoutubeTranscript.fetchTranscript(videoLink)
      .then((transcript) => {
        // Successfully retrieved transcript
        console.log(transcript);
        // setData((prevState) => ({
        //   ...prevState,
        //   transcript: transcript || "",
        // }));
      })
      .catch((error) => {
        // Handle the error here, e.g., show an error message
        console.error("Transcript fetch error:", error);
      });
  };

  useEffect(() => {
    const savedVideoLink = localStorage.getItem("videoLink");

    setData((prevState) => ({
      ...prevState,
      videoLink: savedVideoLink || "",
    }));

    if (savedVideoLink) {
      getTranscript(savedVideoLink);
    }
  }, []);

  return (
    <div className="w-full flex-1 h-full p-2 flex items-center flex-col">
      <div className="w-full p-4 gap-4 flex">
        <iframe
          className="h-[260px] aspect-video rounded border-gray-500 border"
          src={`https://www.youtube.com/embed/${extractVideoId(
            data.videoLink
          )}`}
          title="YouTube Video Player"
          allowFullScreen
        ></iframe>
        <div className="w-full border rounded border-gray-400"></div>
      </div>

      <Chats/>
    </div>
  );
}
