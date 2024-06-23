"use client";
import MenuChatContext from "@/context/rpg-menu-chat-context";
import { useChat } from "ai/react";
import { useContext } from "react";

export default function Chat() {
  const { sharedState } = useContext(MenuChatContext);
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: sharedState.url,
  });

  return (
    <div className="flex flex-col h-screen w-full px-8">
      <h1 className="flex w-full justify-around">{sharedState.name}</h1>
      <div className="flex-1 overflow-y-auto">
        {messages.map((message) => (
          <div key={message.id} className="mb-2">
            {message.role === "user" ? (
              <div className="flex items-center justify-end">
                <p className="p-2 border border-black rounded">
                  {message.content}
                </p>
                <p className="pl-2">User</p>
              </div>
            ) : (
              <div className="flex items-center justify-start">
                <p className="pr-2">{sharedState.name}</p>
                <p className="p-2 border border-black rounded">
                  {message.content}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
      <form className="flex pb-7" onSubmit={handleSubmit}>
        <input
          className="flex-1 border p-4 border-black rounded mr-2 text-black"
          name="prompt"
          value={input}
          onChange={handleInputChange}
          id="input"
        />
        <button
          type="submit"
          className="p-5 bg-white text-black rounded border border-black"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
