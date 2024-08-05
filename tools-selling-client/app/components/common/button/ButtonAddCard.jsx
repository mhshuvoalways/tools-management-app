"use client";

import { MyContext } from "@/app/context";
import { useContext } from "react";

const ButtonAddCard = ({ tool }) => {
  const { orderTools, bookHandler } = useContext(MyContext);
  const temp = [...orderTools];
  const findTool = temp.find((el) => el._id === tool._id);

  return (
    <button className="btn" onClick={() => bookHandler(tool)}>
      {findTool ? "Booked" : "Book"}
    </button>
  );
};

export default ButtonAddCard;
