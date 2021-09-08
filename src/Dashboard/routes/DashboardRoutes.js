import React from "react";
import { Route } from "react-router-dom";
import Dashboard from "../Dashboard";

const DashboardRoutes = () => {
  return <Route exact path="/" component={Dashboard} />;
};
export default DashboardRoutes;
