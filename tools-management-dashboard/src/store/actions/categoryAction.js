import axios from "../../utils/axios";
import * as Types from "../constants/categoryType";
import alertAction from "./alertAction";
import btnAction from "./btnAction";
import modalAction from "./modalAction";

export const addCategory = (category) => (dispatch) => {
  dispatch(btnAction(true));
  axios
    .post("/category/createCategory", category)
    .then((response) => {
      dispatch({
        type: Types.ADD_CATEGORY,
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

export const getCategories = () => (dispatch) => {
  axios
    .get("/category/getCategory")
    .then((response) => {
      dispatch({
        type: Types.GET_CATEGORIES,
        payload: response.data,
      });
    })
    .catch((err) => {
      dispatch(alertAction(err.response.data, "error"));
    });
};

export const updateCategory = (category, id, categoryImageId) => (dispatch) => {
  dispatch(btnAction(true));
  axios
    .put(
      `/category/updateCategory/${id}/${encodeURIComponent(categoryImageId)}`,
      category
    )
    .then((response) => {
      dispatch({
        type: Types.UPDATE_CATEGORY,
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

export const deleteCategory = (id, categoryImageId) => (dispatch) => {
  axios
    .delete(
      `/category/deleteCategory/${id}/${encodeURIComponent(categoryImageId)}`
    )
    .then((response) => {
      dispatch({
        type: Types.DELETE_CATEGORY,
        payload: response.data.response,
      });
      dispatch(alertAction(response.data, "success"));
    })
    .catch((err) => {
      dispatch(alertAction(err.response.data, "error"));
    });
};
