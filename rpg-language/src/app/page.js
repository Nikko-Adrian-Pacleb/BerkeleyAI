"use client";
import Chat from "@/components/Chat";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import { MenuChatProvider } from "@/context/rpg-menu-chat-context";

export default function Home() {
  return (
    <main className="h-screen mx-6 flex flex-col">
      <Navbar />
      <MenuChatProvider className="flex-1">
        <div className="flex h-full">
          <Menu />
          <div className="inline-block h-full w-0.5 bg-black dark:bg-black"></div>
          <Chat />
        </div>
      </MenuChatProvider>
    </main>
  );
}
