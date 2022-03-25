import React, { useState, createContext, useEffect } from "react";

export const userContext = createContext();

export const UserProvider = (props) => {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((response) => response.json())
      .then((data) => setState(data));
  }, []);

  return (
    <userContext.Provider value={[state, setState]}>
      {props.children}
    </userContext.Provider>
  );
};
