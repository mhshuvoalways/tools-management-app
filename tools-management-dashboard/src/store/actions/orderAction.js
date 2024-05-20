import axios from "../../utils/axios";
import * as Types from "../constants/orderType";
import alertAction from "./alertAction";
import btnAction from "./btnAction";
import modalAction from "./modalAction";

export const getOrders = () => (dispatch) => {
  axios
    .get("/order/getOders")
    .then((response) => {
      dispatch({
        type: Types.GET_ORDERS,
        payload: response.data,
      });
    })
    .catch((err) => {
      dispatch(alertAction(err.response.data, "error"));
    });
};

export const updateOrders = (order, id) => (dispatch) => {
  dispatch(btnAction(true));
  axios
    .put(`/order/updateOrder/${id}`, order)
    .then((response) => {
      dispatch({
        type: Types.UPDATE_ORDERS,
        payload: response.data.response,
      });
      dispatch(btnAction(false));
      dispatch(modalAction(false));
      dispatch(alertAction(response.data, "success"));
    })
    .catch((err) => {
      dispatch(alertAction(err.response.data, "error"));
      dispatch(btnAction(false));
    });
};

export const deleteOrder = (id) => (dispatch) => {
  axios
    .delete(`/order/deleteOrder/${id}`)
    .then((response) => {
      dispatch({
        type: Types.DELETE_ORDERS,
        payload: response.data.response,
      });
      dispatch(alertAction(response.data, "success"));
    })
    .catch((err) => {
      dispatch(alertAction(err.response.data, "error"));
    });
};
