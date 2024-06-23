import { useContext } from "react";
import MenuChatContext from "@/context/rpg-menu-chat-context";

export default function CharacterCard({ name, description, url }) {
  const { sharedState, setSharedState } = useContext(MenuChatContext);

  const handleClick = () => {
    setSharedState({
      name: name,
      url: url,
    });
  };

  return (
    <div className="p-4 border rounded shadow-md">
      <h1 className="text-xl font-bold mb-2">{name}</h1>
      <p className="text-gray-700 mb-4">{description}</p>
      <button
        onClick={handleClick}
        className="p-2 bg-blue-500 text-white rounded"
      >
        Chat
      </button>
    </div>
  );
}
