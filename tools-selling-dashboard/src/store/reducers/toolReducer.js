import clearData from "../constants/clearData";
import * as Types from "../constants/toolType";

const init = {
  tools: [],
};

const toolReducer = (state = init, action) => {
  switch (action.type) {
    case Types.ADD_TOOL: {
      return {
        tools: [...state.tools, action.payload],
      };
    }

    case Types.GET_TOOLS: {
      return {
        tools: action.payload,
      };
    }

    case Types.DELETE_TOOL: {
      const temp = [...state.tools];
      const tools = temp.filter((el) => el._id !== action.payload._id);
      return {
        tools,
      };
    }

    case Types.UPDATE_TOOL: {
      const temp = [...state.tools];
      const findIndex = temp.findIndex((el) => el._id === action.payload._id);
      temp[findIndex] = action.payload;
      return {
        tools: temp,
      };
    }

    case clearData: {
      return {
        tools: [],
      };
    }
    default:
      return state;
  }
};

export default toolReducer;
