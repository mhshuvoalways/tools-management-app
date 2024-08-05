import modalType from "../constants/modalType";

const modalReducer = (state = { modal: false, element: null }, action) => {
  switch (action.type) {
    case modalType: {
      const { modal, element } = action.payload;
      return {
        modal,
        element,
      };
    }
    default:
      return state;
  }
};

export default modalReducer;
