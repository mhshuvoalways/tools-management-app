"use client";

import { createContext, useEffect, useState } from "react";

export const MyContext = createContext(null);

const Context = ({ children }) => {
  const [orderTools, setOrderTools] = useState([]);
  const [btnAction, setBtnAction] = useState(false);
  const [tostify, setTostify] = useState({
    messages: {},
    type: "",
  });

  useEffect(() => {
    const tools = JSON.parse(localStorage.getItem("tools"));
    if (tools) {
      setOrderTools(tools);
    }
  }, []);

  return (
    <MyContext.Provider
      value={{
        orderTools,
        setOrderTools,
        btnAction,
        setBtnAction,
        tostify,
        setTostify,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default Context;
