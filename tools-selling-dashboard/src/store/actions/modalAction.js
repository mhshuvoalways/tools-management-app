import modalType from "../constants/modalType";

const modalAction = (modal, element) => (dispatch) => {
  dispatch({
    type: modalType,
    payload: {
      modal,
      element,
    },
  });
};

export default modalAction;
