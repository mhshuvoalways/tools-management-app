import { jwtDecode } from "jwt-decode";
import axios from "../../utils/axios";
import setAuthToken from "../../utils/setAuthToken";
import clearData from "../constants/clearData";
import * as Types from "../constants/userType";
import alertAction from "./alertAction";
import btnAction from "./btnAction";

export const adminLogin = (user, navigate) => (dispatch) => {
  dispatch(btnAction(true));
  axios
    .post("/user/adminLogin", user)
    .then((response) => {
      const token = response.data.token;
      dispatch({
        type: Types.ADMIN_LOGIN,
        payload: jwtDecode(token),
      });
      setAuthToken(token);
      localStorage.setItem("token", token);
      dispatch(btnAction(false));
      navigate("/");
    })
    .catch((err) => {
      dispatch(alertAction(err.response.data, "error"));
      dispatch(btnAction(false));
    });
};

export const getUsers = () => (dispatch) => {
  axios
    .get("/user/getUsers")
    .then((response) => {
      dispatch({
        type: Types.GET_USER,
        payload: response.data,
      });
    })
    .catch((err) => {
      dispatch(alertAction(err.response.data, "error"));
    });
};

export const isAuthenticate = (navigate) => (dispatch) => {
  const token = localStorage.getItem("token");
  if (!token) {
    dispatch(logout(navigate));
  } else {
    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      dispatch(logout(navigate));
    } else {
      dispatch({
        type: Types.ISAUTHENTICATE,
        payload: jwtDecode(token),
      });
      const timeout = (decoded.exp - currentTime) * 1000;
      setTimeout(() => {
        dispatch(logout(navigate));
      }, timeout);
    }
  }
};

export const logout = (navigate) => (dispatch) => {
  dispatch({
    type: clearData,
  });
  localStorage.removeItem("token");
  setAuthToken("");
  navigate("/login");
};
