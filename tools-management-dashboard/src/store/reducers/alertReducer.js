import alertType from "../constants/alertType";
import clearData from "../constants/clearData";

const alertReducer = (
  state = {
    type: "",
    messages: {},
  },
  action
) => {
  switch (action.type) {
    case alertType: {
      return {
        messages: action.payload.messages,
        type: action.payload.type,
      };
    }
    case clearData: {
      return {
        type: "",
        messages: {},
      };
    }
    default:
      return state;
  }
};

export default alertReducer;
