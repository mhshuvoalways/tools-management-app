import clearData from "../constants/clearData";
import * as Types from "../constants/userType";

const init = {
  isAuth: true,
  user: {},
  users: [],
};

const userReudcer = (state = init, action) => {
  switch (action.type) {
    case Types.ADMIN_LOGIN: {
      return {
        ...state,
        isAuth: true,
        user: action.payload,
      };
    }

    case Types.GET_USER: {
      return {
        ...state,
        users: action.payload,
      };
    }

    case Types.ISAUTHENTICATE: {
      return {
        ...state,
        user: action.payload,
      };
    }

    case clearData: {
      return {
        isAuth: true,
        user: {},
        users: [],
      };
    }
    default:
      return state;
  }
};

export default userReudcer;
