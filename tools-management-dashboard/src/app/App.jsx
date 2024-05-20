import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/common/loading";
import Tostify from "../components/common/tostify";
import { getCategories } from "../store/actions/categoryAction";
import { getOrders } from "../store/actions/orderAction";
import { getTools } from "../store/actions/toolAction";
import { isAuthenticate } from "../store/actions/userAction";
import Router from "./Router";

const App = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((store) => store.user);
  const { categories } = useSelector((store) => store.category);
  const { tools } = useSelector((store) => store.tool);
  const { orders } = useSelector((store) => store.order);

  useEffect(() => {
    if (isAuth) {
      dispatch(getCategories());
      dispatch(getTools());
      dispatch(getOrders());
    } else {
      dispatch(isAuthenticate());
    }
  }, [categories.length, dispatch, isAuth, orders.length, tools.length]);

  return (
    <>
      <Tostify />
      <Loading />
      <Router />
    </>
  );
};

export default App;
