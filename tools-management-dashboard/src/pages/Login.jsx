import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { adminLogin } from "../store/actions/userAction";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeHandler = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(adminLogin(user, navigate));
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="space-y-5 bg-white p-10 rounded-xl" onSubmit={onSubmit}>
        <div>
          <label>Email*</label>
          <input
            type="text"
            className="w-full p-3 outline-0 bg-gray-100 rounded-xl mt-2"
            name="email"
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>Password*</label>
          <input
            type="password"
            className="w-full p-3 outline-0 bg-gray-100 rounded-xl mt-2"
            name="password"
            onChange={changeHandler}
          />
        </div>
        <button className="btn w-full">Submit</button>
      </form>
    </div>
  );
};

export default Login;
