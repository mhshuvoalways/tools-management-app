import * as Types from "../constants/categoryType";
import clearData from "../constants/clearData";

const init = {
  categories: [],
};

const cateogryReducer = (state = init, action) => {
  switch (action.type) {
    case Types.ADD_CATEGORY: {
      return {
        categories: [...state.categories, action.payload],
      };
    }

    case Types.GET_CATEGORIES: {
      return {
        categories: action.payload,
      };
    }

    case Types.DELETE_CATEGORY: {
      const temp = [...state.categories];
      const categories = temp.filter((el) => el._id !== action.payload._id);
      return {
        categories,
      };
    }

    case Types.UPDATE_CATEGORY: {
      const temp = [...state.categories];
      const findIndex = temp.findIndex((el) => el._id === action.payload._id);
      temp[findIndex] = action.payload;
      return {
        categories: temp,
      };
    }

    case clearData: {
      return {
        categories: [],
      };
    }
    default:
      return state;
  }
};

export default cateogryReducer;
