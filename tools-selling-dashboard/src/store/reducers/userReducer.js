import clearData from "../constants/clearData";
import * as Types from "../constants/userType";

const init = {
  isAuth: false,
  user: {},
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

    case Types.ISAUTHENTICATE: {
      return {
        ...state,
        isAuth: action.payload.isAuth,
        user: action.payload.user,
      };
    }

    case clearData: {
      return {
        isAuth: false,
        user: {},
      };
    }
    default:
      return state;
  }
};

export default userReudcer;
