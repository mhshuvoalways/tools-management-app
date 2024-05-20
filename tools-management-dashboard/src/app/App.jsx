import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/common/loading";
import Tostify from "../components/common/tostify";
import { getCategories } from "../store/actions/categoryAction";
import { getOrders } from "../store/actions/orderAction";
import { getTools } from "../store/actions/toolAction";
import { getUsers } from "../store/actions/userAction";
import Router from "./Router";

const App = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((store) => store.category);
  const { tools } = useSelector((store) => store.tool);
  const { users } = useSelector((store) => store.user);
  const { orders } = useSelector((store) => store.order);

  useEffect(() => {
    if (!categories.length) {
      dispatch(getCategories());
    }
    if (!tools.length) {
      dispatch(getTools());
    }
    if (!users.length) {
      dispatch(getUsers());
    }
    if (!orders.length) {
      dispatch(getOrders());
    }
  }, [categories.length, dispatch, tools.length, users.length, orders.length]);

  return (
    <>
      <Tostify />
      <Loading />
      <Router />
    </>
  );
};

export default App;
