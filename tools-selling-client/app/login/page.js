"use client";

import { MyContext } from "@/app/context";
import Axios from "@/app/services/axios";
import setAuthToken from "@/app/services/setAuthToken";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useContext, useState } from "react";

const SignUpPage = () => {
  const { isAuth, setIsAuth, isAuthHandler, setBtnAction } =
    useContext(MyContext);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    message: "",
  });

  const changeHandler = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
    setErrors({
      ...errors,
      [event.target.name]: "",
      message: "",
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setBtnAction(true);
    Axios.post("/user/userLogin", user)
      .then((res) => {
        const token = res.data.token;
        localStorage.setItem("token", JSON.stringify(token));
        setAuthToken(token);
        setIsAuth(true);
        isAuthHandler();
        setBtnAction(false);
      })
      .catch((err) => {
        setErrors(err.response?.data);
        setBtnAction(false);
      });
  };

  if (isAuth) {
    redirect("/");
  }

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <form
        className="bg-white space-y-5 p-10 rounded-xl"
        onSubmit={submitHandler}
      >
        <p className="text-2xl">Login</p>
        <div>
          <label className="font-medium">Email</label>
          <div>
            <input
              placeholder="johndoe@gmail.com"
              type="email"
              className="w-full h-10 py-1 px-4 outline-0 bg-slate-100 dark:bg-slate-600 rounded-md focus:rounded-lg hover:ring-1 focus:ring-1 ring-primary mt-2"
              name="email"
              value={user?.email}
              onChange={changeHandler}
            />
          </div>
          <p className="text-red-600 font-medium mt-1">{errors?.email}</p>
        </div>
        <div>
          <label className="font-medium">Password</label>
          <div>
            <input
              placeholder="********"
              type="password"
              className="w-full h-10 py-1 px-4 outline-0 bg-slate-100 dark:bg-slate-600 rounded-md focus:rounded-lg hover:ring-1 focus:ring-1 ring-primary mt-2"
              name="password"
              value={user?.password}
              onChange={changeHandler}
            />
          </div>
          <p className="text-red-600 font-medium mt-1">{errors?.password}</p>
        </div>
        <div className="flex items-center gap-5">
          <button className="btn">Login</button>
          <Link href={"/signup"}>
            <button className="w-full border border-primary py-1.5 px-5 rounded-md hover:rounded-lg transition-all font-medium hover:shadow">
              Signup
            </button>
          </Link>
        </div>
        <p className="text-red-600 font-medium text-center text-lg">
          {errors?.message}
        </p>
      </form>
    </div>
  );
};

export default SignUpPage;
