"use client";

import { MyContext } from "@/app/context";
import LoadingImg from "@/public/icons/loading.svg";
import Image from "next/image";
import { useContext } from "react";

const Loading = () => {
  const { btnAction } = useContext(MyContext);

  return (
    btnAction && (
      <div className="fixed w-full h-screen flex items-center justify-center z-50">
        <p className="bg-black opacity-60 fixed inset-0"></p>
        <Image src={LoadingImg} alt="" className="z-10" />
      </div>
    )
  );
};

export default Loading;
