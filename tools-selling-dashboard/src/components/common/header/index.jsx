import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { isAuthenticate, logout } from "../../../store/actions/userAction";
import HeadLessUI from "../headlessUI";

const items = [
  {
    id: 1,
    title: "Dashboard",
    url: "/",
  },
  {
    id: 2,
    title: "Categories",
    url: "/categories",
  },
  {
    id: 3,
    title: "Tools",
    url: "/tools",
  },
  {
    id: 4,
    title: "Orders",
    url: "/orders",
  },
];

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(isAuthenticate(navigate));
  }, [dispatch, navigate]);

  return (
    <div className="bg-white py-2 sticky top-0 z-20 shadow">
      <div className="mainWidht flex justify-between items-center gap-5">
        <p className="text-primary container text-3xl font-bold">
          <Link to={"/"}>SINC</Link>
        </p>
        <div className="block sm:hidden">
          <HeadLessUI btnIcon={"fa-solid fa-bars"} items={items} />
        </div>
        <div className="sm:flex items-center gap-5 flex-wrap sm:flex-nowrap hidden">
          {items.map((item) => (
            <Link
              to={item.url}
              key={item.id}
              className="text-primary cursor-pointer font-medium"
            >
              {item.title}
            </Link>
          ))}
          <p
            className="text-primary cursor-pointer font-medium"
            onClick={() => dispatch(logout(navigate))}
          >
            Logout
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
