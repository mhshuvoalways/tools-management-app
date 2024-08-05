import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Category from "../pages/Category";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Order from "../pages/Order";
import Tools from "../pages/Tools";

const PrivateRoute = ({ children }) => {
  const user = useSelector((store) => store.user);
  return user.isAuth ? children : <Navigate to="/login" />;
};

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/categories"
          element={
            <PrivateRoute>
              <Category />
            </PrivateRoute>
          }
        />
        <Route
          path="/tools"
          element={
            <PrivateRoute>
              <Tools />
            </PrivateRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <PrivateRoute>
              <Order />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
