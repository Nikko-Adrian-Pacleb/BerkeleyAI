"use client";
import MenuChatContext from "@/context/rpg-menu-chat-context";
import { useChat } from "ai/react";
import { useContext } from "react";
import Image from "next/image";

export default function Chat() {
  const { sharedState } = useContext(MenuChatContext);
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: sharedState.url,
  });

  return (
    <div className="flex flex-col h-full w-full px-8">
      <h1 className="flex w-full mt-3 justify-around text-2xl">
        {sharedState.name}
      </h1>
      <hr className="h-px my-3 bg-bgwhite"></hr>
      <div className="flex-1 overflow-y-auto">
        {messages.map((message) => (
          <div key={message.id} className="mb-2">
            {message.role === "user" ? (
              <div className="flex items-center justify-end">
                <p className="p-2 border-2 border-bgblue  bg-bgwhite text-bgblack rounded max-w-2xl">
                  {message.content}
                </p>
                {/* <p className="pl-2">User</p> */}
              </div>
            ) : (
              <div className="flex items-center justify-start">
                {/* <p className="pr-2">{sharedState.name}</p> */}
                <Image
                  className="pr-4"
                  src={`/${sharedState.name}.png`}
                  width="50"
                  height="50"
                />
                <p className="p-2 border-2 border-bgblue bg-bgwhite text-bgblack rounded max-w-2xl">
                  {message.content}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
      <form className="flex pb-7" onSubmit={handleSubmit}>
        <input
          className="flex-1 border-2 p-4 border-bgblue bg-bgwhite rounded mr-2 text-black"
          name="prompt"
          value={input}
          onChange={handleInputChange}
          id="input"
        />
        <button
          type="submit"
          className="p-5 text-lg bg-bgblue text-bgwhite rounded border border-black"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
