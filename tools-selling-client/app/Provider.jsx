"use client";

import Loading from "@/app/components/common/loading";
import Tostify from "@/app/components/common/tostify";
import setAuthToken from "@/app/services/setAuthToken";
import Context from "./context";

const Provider = ({ children }) => {
  const userToken =
    typeof window !== "undefined" && localStorage.getItem("token");
  const token = userToken ? JSON.parse(userToken) : null;
  if (token) {
    setAuthToken(token);
  }

  return (
    <Context>
      <Tostify />
      <Loading />
      {children}
    </Context>
  );
};

export default Provider;
