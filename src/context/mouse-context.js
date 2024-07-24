import React, { createContext, useState } from "react";

export const MouseContext = createContext({
  cursorType: "",
  cursorChangeHandler: () => {},
});

const MouseContextProvider = ({children}) => {
  const [cursorType, setCursorType] = useState("");

  const cursorChangeHandler = (type) => {
        setCursorType(type);
    };

    return (
        <MouseContext.Provider value={{ cursorType, cursorChangeHandler }}>
            {children}
        </MouseContext.Provider>
  );
};

export default MouseContextProvider;
