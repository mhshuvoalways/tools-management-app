"use client";

import { MyContext } from "@/app/context";
import Link from "next/link";
import { useContext } from "react";

const Header = () => {
  const { orderTools, isAuth, logout } = useContext(MyContext);

  return (
    <div className="bg-white py-2 sticky top-0 z-20 shadow">
      <div className="mainWidht flex justify-between items-center gap-5">
        <p className="text-primary text-3xl font-bold">
          <Link href={"/"}>SINC</Link>
        </p>
        <div className="flex items-center gap-5 sm:gap-10">
          <Link href={"/order"}>
            <div className="relative">
              <i className="fa-solid fa-cart-shopping text-2xl text-primary"></i>
              <p className="bg-black text-white font-semibold w-4 h-4 flex justify-center items-center absolute rounded-full top-0 -right-3 text-sm">
                {orderTools?.length || 0}
              </p>
            </div>
          </Link>
          <Link href={"/tools"} className="text-primary">
            Tools
          </Link>
          <Link href={"/my-orders"} className="text-primary">
            My Orders
          </Link>
          {isAuth ? (
            <p className="cursor-pointer text-primary" onClick={logout}>
              Logout
            </p>
          ) : (
            <Link href={"/login"} className="cursor-pointer text-primary">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
