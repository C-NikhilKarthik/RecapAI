import ChatsDrawer from "@/components/ChatsDrawer";
import Main from "@/components/Main";
import React from "react";

export default function page() {
  return (
    <div className="w-screen h-screen bg-[#0a0a0a] flex">
      <div className="h-full flex-none md:w-[350px] md:flex hidden">
        <ChatsDrawer />
      </div>
      <Main/>
    </div>
  );
}
