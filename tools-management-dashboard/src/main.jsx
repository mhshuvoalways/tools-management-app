import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./app/App";
import "./index.css";
import store from "./store";
import setAuthToken from "./utils/setAuthToken";

const token = localStorage.getItem("token");
if (token) {
  setAuthToken(token);
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
