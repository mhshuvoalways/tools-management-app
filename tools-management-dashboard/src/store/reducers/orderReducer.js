import clearData from "../constants/clearData";
import * as Types from "../constants/orderType";

const init = {
  orders: [],
};

const orderReducer = (state = init, action) => {
  switch (action.type) {
    case Types.GET_ORDERS: {
      return {
        orders: action.payload,
      };
    }

    case Types.UPDATE_ORDERS: {
      const temp = [...state.orders];
      const findIndex = temp.findIndex((el) => el._id === action.payload._id);
      temp[findIndex] = action.payload;
      return {
        orders: temp,
      };
    }

    case Types.DELETE_ORDERS: {
      const temp = [...state.orders];
      const orders = temp.filter((el) => el._id !== action.payload._id);
      return {
        orders,
      };
    }

    case clearData: {
      return {
        orders: [],
      };
    }
    default:
      return state;
  }
};

export default orderReducer;
