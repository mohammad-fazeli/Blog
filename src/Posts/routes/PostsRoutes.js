import React from "react";
import { Route } from "react-router-dom";
import Postscontainer from "../Postscontainer";

function PostsRoutes(props) {
  return <Route path="/posts" component={Postscontainer} />;
}

export default PostsRoutes;
