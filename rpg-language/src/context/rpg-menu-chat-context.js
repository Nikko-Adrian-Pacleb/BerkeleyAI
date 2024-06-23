import Menu from "@/components/Menu";
import { createContext, useState } from "react";

const MenuChatContext = createContext();

export const MenuChatProvider = ({ children }) => {
  const [sharedState, setSharedState] = useState({
    name: " Cafe Barista",
    url: "api/rpgchat/cafe/barista",
  });

  return (
    <MenuChatContext.Provider value={{ sharedState, setSharedState }}>
      {children}
    </MenuChatContext.Provider>
  );
};

export default MenuChatContext;
