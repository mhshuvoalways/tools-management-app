import axios from "../../utils/axios";
import * as Types from "../constants/toolType";
import alertAction from "./alertAction";
import btnAction from "./btnAction";
import modalAction from "./modalAction";

export const addTool = (tool) => (dispatch) => {
  dispatch(btnAction(true));
  axios
    .post("/tool/addTool", tool)
    .then((response) => {
      dispatch({
        type: Types.ADD_TOOL,
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

export const getTools = () => (dispatch) => {
  axios
    .get("/tool/getTools")
    .then((response) => {
      dispatch({
        type: Types.GET_TOOLS,
        payload: response.data,
      });
    })
    .catch((err) => {
      dispatch(alertAction(err.response.data, "error"));
    });
};

export const updateTool = (category, id, toolImageId) => (dispatch) => {
  dispatch(btnAction(true));
  axios
    .put(`/tool/updateTool/${id}/${encodeURIComponent(toolImageId)}`, category)
    .then((response) => {
      dispatch({
        type: Types.UPDATE_TOOL,
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

export const deleteTool = (id, toolImageId) => (dispatch) => {
  axios
    .delete(`/tool/deleteTool/${id}/${encodeURIComponent(toolImageId)}`)
    .then((response) => {
      dispatch({
        type: Types.DELETE_TOOL,
        payload: response.data.response,
      });
      dispatch(alertAction(response.data, "success"));
    })
    .catch((err) => {
      dispatch(alertAction(err.response.data, "error"));
    });
};
