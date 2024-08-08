"use client";

import { jwtDecode } from "jwt-decode";

import { createContext, useCallback, useEffect, useState } from "react";

export const MyContext = createContext(null);

const Context = ({ children }) => {
  const [isAuth, setIsAuth] = useState(true);
  const [user, setUser] = useState(null);
  const [btnAction, setBtnAction] = useState(false);
  const [tostify, setTostify] = useState({
    messages: {},
    type: "",
  });
  const [orderTools, setOrderTools] = useState([]);

  const logout = useCallback(() => {
    localStorage.clear();
    setIsAuth(false);
    setOrderTools([])
  }, []);

  const isAuthHandler = useCallback(() => {
    const userToken = localStorage.getItem("token");
    const token = userToken ? JSON.parse(userToken) : null;
    if (token) {
      const decodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      if (decodedToken.exp && decodedToken.exp < currentTime) {
        logout();
      } else if (decodedToken.exp) {
        setIsAuth(true);
        setUser(decodedToken);
        const timeout = (decodedToken.exp - currentTime) * 1000;
        setTimeout(() => {
          logout();
        }, timeout);
      } else {
        logout();
      }
    } else {
      logout();
    }
  }, [logout]);

  useEffect(() => {
    isAuthHandler();
  }, [isAuthHandler]);

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
        isAuth,
        user,
        setIsAuth,
        isAuthHandler,
        logout,
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
