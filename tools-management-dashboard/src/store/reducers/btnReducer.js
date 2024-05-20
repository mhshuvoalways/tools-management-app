import btnType from "../constants/btnType";

const alertReducer = (state = false, action) => {
  switch (action.type) {
    case btnType: {
      return action.payload;
    }
    default:
      return state;
  }
};

export default alertReducer;
