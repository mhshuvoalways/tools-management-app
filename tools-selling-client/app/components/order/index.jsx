"use client";

import { MyContext } from "@/app/context";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import DeliveryAddress from "./DeliveryAddress";
import Tools from "./Tools";

const Index = () => {
  const [deliverAddress, setDeliveryAddress] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    streetAddress: "",
    additionalInformation: "",
  });

  const { orderTools, setBtnAction, setTostify, setOrderTools } =
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
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setBtnAction(true);
    const orderObj = {
      ...deliverAddress,
      tools: orderTools,
    };
    axios
      .post(`${process.env.BACKEND_URL}/order/orderPlace`, orderObj)
      .then((res) => {
        setTostify({ messages: res.data, type: "success" });
        setBtnAction(false);
        localStorage.removeItem("tools");
        setOrderTools([]);
        router.push("/");
      })
      .catch((err) => {
        if (err.response) {
          setTostify({ messages: err.response?.data, type: "error" });
          setBtnAction(false);
        }
      });
  };

  return (
    <div className="mainWidht mt-10 flex justify-between gap-10 flex-wrap md:flex-nowrap">
      <DeliveryAddress changeHandler={changeHandler} />
      <Tools
        totalPrice={totalPrice}
        orderTools={orderTools}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default Index;
