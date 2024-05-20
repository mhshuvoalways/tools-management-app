import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { thunk } from "redux-thunk";
import alertReducer from "./reducers/alertReducer";
import btnReducer from "./reducers/btnReducer";
import categoryReducer from "./reducers/categoryReducer";
import modalReducer from "./reducers/modalReducer";
import orderReducer from "./reducers/orderReducer";
import toolReducer from "./reducers/toolReducer";
import userReducer from "./reducers/userReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  user: userReducer,
  tool: toolReducer,
  category: categoryReducer,
  order: orderReducer,
  tostify: alertReducer,
  loading: btnReducer,
  modal: modalReducer,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
