import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import DashboardRoutes from "../../Dashboard/routes/DashboardRoutes";
import PostsRoutes from "../../Posts/routes/PostsRoutes";
const AppRoutes = () => {
  return (
    <Router>
      <PostsRoutes />
      <DashboardRoutes />
    </Router>
  );
};

export default AppRoutes;
