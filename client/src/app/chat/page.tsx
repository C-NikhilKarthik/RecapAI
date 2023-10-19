import ChatArea from "@/components/ChatArea";
import ChatsDrawer from "@/components/ChatsDrawer";
import React from "react";

export default function page() {
  return (
    <div className="w-screen h-screen bg-[#14151e] flex">
      <div className="h-full flex-none md:w-[350px] md:flex hidden">
        <ChatsDrawer />
      </div>
      <ChatArea />
    </div>
  );
}
