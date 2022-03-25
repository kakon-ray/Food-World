import React, { useState, createContext } from "react";

export const foodSidebar = createContext();

export const FoodProvider = (props) => {
  const [state, setState] = useState([]);

  return (
    <foodSidebar.Provider value={[state, setState]}>
      {props.children}
    </foodSidebar.Provider>
  );
};
