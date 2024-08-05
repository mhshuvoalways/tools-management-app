import btnType from "../constants/btnType";

const btnAction = (value) => (dispatch) => {
  dispatch({
    type: btnType,
    payload: value,
  });
};

export default btnAction;
