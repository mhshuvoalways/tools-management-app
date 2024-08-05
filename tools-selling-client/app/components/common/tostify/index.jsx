"use client";

import { MyContext } from "@/app/context";
import { useContext, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Tostify = () => {
  const { tostify } = useContext(MyContext);
  useEffect(() => {
    if (tostify.type && tostify.messages) {
      Object.values(tostify.messages).forEach((msg) => {
        toast[tostify.type](msg, {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
    }
  }, [tostify]);

  return <ToastContainer />;
};

export default Tostify;
