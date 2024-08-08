"use client";

import { MyContext } from "@/app/context";
import Axios from "@/app/services/axios";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import DeliveryAddress from "./DeliveryAddress";
import Tools from "./Tools";

const Index = () => {
  const [deliverAddress, setDeliveryAddress] = useState({
    email: "",
    rc: "",
    purpose: "",
  });

  const [deliverAddressError, setDeliveryAddressError] = useState({
    email: "",
    rc: "",
    purpose: "",
  });

  const { isAuth, orderTools, setBtnAction, setTostify, setOrderTools } =
    useContext(MyContext);
  const router = useRouter();

  let totalPrice = 0;
  orderTools?.forEach((el) => {
    totalPrice = totalPrice + el.price;
  });

  const changeHandler = (event) => {
    setDeliveryAddress({
      ...deliverAddress,
      [event.target.name]: event.target.value,
    });
    setDeliveryAddressError({
      ...deliverAddressError,
      [event.target.name]: "",
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (!isAuth) {
      router.push("/login");
    } else {
      setBtnAction(true);
      const orderObj = {
        ...deliverAddress,
        tools: orderTools,
      };
      Axios.post(`${process.env.BACKEND_URL}/order/orderPlace`, orderObj)
        .then((res) => {
          setTostify({ messages: res.data, type: "success" });
          setBtnAction(false);
          localStorage.removeItem("tools");
          setOrderTools([]);
          router.push("/");
        })
        .catch((err) => {
          setDeliveryAddressError(err.response?.data);
          setBtnAction(false);
          if (err.response?.data?.message) {
            setTostify({
              messages: { message: err.response?.data.message },
              type: "error",
            });
          }
        });
    }
  };

  return (
    <div className="mainWidht mt-10 flex justify-between gap-10 flex-wrap md:flex-nowrap">
      <DeliveryAddress
        changeHandler={changeHandler}
        deliverAddressError={deliverAddressError}
      />
      <Tools
        totalPrice={totalPrice}
        orderTools={orderTools}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default Index;
