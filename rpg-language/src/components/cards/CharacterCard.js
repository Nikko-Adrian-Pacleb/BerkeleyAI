import { useState, useContext } from "react";
import MenuChatContext from "@/context/rpg-menu-chat-context";

export default function CharacterCard({ name, description, url }) {
  const { sharedState, setSharedState } = useContext(MenuChatContext);

  const handleClick = () => {
    console.log("Chat Clicked");
    setSharedState({
      name: name,
      url: url,
      isVisible: false,
    });
  };

  const handleClose = () => {
    setSharedState({
      ...sharedState,
      isVisible: false,
    });
  };

  if (!sharedState.isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative p-2 w-64 bg-white border rounded shadow-md z-50">
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          &times;
        </button>
        <h1 className="text-xl font-bold mb-1 bg-bgblack">{name}</h1>
        <p className="text-gray-700 text-sm mb-2">{description}</p>
        <button
          onClick={handleClick}
          className="px-3 py-1 bg-blue-500 text-white text-sm rounded"
        >
          Chat
        </button>
      </div>
    </div>
  );
}
