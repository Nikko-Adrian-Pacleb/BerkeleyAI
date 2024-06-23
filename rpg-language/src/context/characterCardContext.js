import { createContext, useState } from "react";

const characterCardContext = createContext();

export const characterCardProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <characterCardContext.Provider value={{ isVisible, setIsVisible }}>
      {children}
    </characterCardContext.Provider>
  );
};

export default characterCardContext;
