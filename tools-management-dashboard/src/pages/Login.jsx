import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { adminLogin } from "../store/actions/userAction";

const Login = () => {
  const [user, setUser] = useState({
    email: "admin@gmail.com",
    password: "admin123",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuth } = useSelector((store) => store.user);

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

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth, navigate]);

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
            value={user.email}
          />
        </div>
        <div>
          <label>Password*</label>
          <input
            type="password"
            className="w-full p-3 outline-0 bg-gray-100 rounded-xl mt-2"
            name="password"
            onChange={changeHandler}
            value={user.password}
          />
        </div>
        <button className="btn w-full">Submit</button>
      </form>
    </div>
  );
};

export default Login;
