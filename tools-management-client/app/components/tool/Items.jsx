"use client";

import { MyContext } from "@/app/context";
import Image from "next/image";
import { useContext } from "react";

const Items = ({ item }) => {
  const { orderTools, setOrderTools } = useContext(MyContext);

  const temp = [...orderTools];
  const findTool = temp.find((tool) => tool._id === item._id);

  const bookHandler = () => {
    if (!findTool) {
      temp.push(item);
      setOrderTools(temp);
    } else {
      const filteredTools = temp.filter((el) => el._id !== item._id);
      setOrderTools(filteredTools);
    }
    localStorage.setItem("tools", JSON.stringify(temp));
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm">
      <Image
        src={item.image.url}
        width={600}
        height={500}
        alt=""
        className="object-cover h-56"
      />
      <p className="font-semibold text-xl mt-5">{item.title}</p>
      <p className="opacity-70 line-clamp-2">{item.description}</p>
      <div className="flex justify-between items-center gap-1 mt-5">
        <p className="text-primary text-2xl">${item.price} per day</p>
        <button className="btn" onClick={bookHandler}>
          {findTool ? "Booked" : "Book"}
        </button>
      </div>
    </div>
  );
};

export default Items;
