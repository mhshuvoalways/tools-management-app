import alertType from "../constants/alertType";

const alertAction = (messages, type) => (dispatch) => {
  dispatch({
    type: alertType,
    payload: { messages, type },
  });
};

export default alertAction;
