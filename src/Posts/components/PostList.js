import React from "react";
import PostItem from "./PostItem";
import { PostListRoot } from "./styled.components";

const PostList = ({ posts, deletePost }) => (
  <PostListRoot>
    {posts.map((post) => (
      <PostItem key={post.id} post={post} deletePost={deletePost} />
    ))}
  </PostListRoot>
);
export default PostList;
