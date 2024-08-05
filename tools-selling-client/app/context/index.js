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

  const bookHandler = (item) => {
    const temp = [...orderTools];
    const findTool = temp.find((tool) => tool._id === item._id);
    if (!findTool) {
      temp.push(item);
      setOrderTools(temp);
      localStorage.setItem("tools", JSON.stringify(temp));
    } else {
      const filteredTools = temp.filter((el) => el._id !== item._id);
      setOrderTools(filteredTools);
      localStorage.setItem("tools", JSON.stringify(filteredTools));
    }
  };

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
        bookHandler,
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
