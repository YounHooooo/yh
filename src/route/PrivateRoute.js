import React from "react";
import MyShop from "../pages/MyShop";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ authenticate }) => {
  return authenticate == true ? <MyShop /> : <Navigate to="/login" />;
};

export default PrivateRoute;
