"use client";

import { MyContext } from "@/app/context";
import Axios from "@/app/services/axios";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useContext, useEffect, useState } from "react";

const MyOrder = () => {
  const [orders, setOrders] = useState([]);
  const { isAuth, user, setTostify } = useContext(MyContext);

  useEffect(() => {
    Axios.get("/order/getMyOrders")
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => {
        if (err.response?.data?.message) {
          setTostify({
            messages: { message: err.response?.data.message },
            type: "error",
          });
        }
      });
  }, [setTostify]);

  if (!isAuth) {
    redirect("/login");
  }

  return (
    <div className="mt-20 mainWidht">
      <p className="text-3xl mb-2">Hello {user?.name}</p>
      <p>Here is your orders</p>
      <div className="table-auto w-full mt-10 overflow-x-auto">
        <table className="border">
          <thead>
            <tr>
              <th className="text-start border-b py-5 px-10">Image</th>
              <th className="text-start border-b py-5 px-10">Title</th>
              <th className="text-start border-b py-5 px-10">Description</th>
              <th className="text-start border-b py-5 px-10">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td className="text-start border-b py-5 px-10 align-top">
                  {order?.tools.map((tool, index) => (
                    <Image
                      src={tool?.image.url}
                      alt=""
                      key={index}
                      width={200}
                      height={200}
                      className="rounded-lg min-w-40 py-2 min-h-44"
                    />
                  ))}
                </td>
                <td className="text-start border-b py-5 px-10 align-top">
                  {order?.tools.map((tool, index) => (
                    <p key={index} className="min-w-40 py-2 min-h-44">
                      {tool.name}
                    </p>
                  ))}
                </td>
                <td className="text-start border-b py-5 px-10 align-top">
                  {order?.tools.map((tool, index) => (
                    <p key={index} className="min-w-80 py-2 min-h-44">
                      {tool.description}
                    </p>
                  ))}
                </td>
                <td className="text-start border-b py-5 px-10 align-top">
                  {order.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
