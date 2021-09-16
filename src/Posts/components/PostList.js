import React from "react";
import PostItem from "./PostItem";
import { PostListRoot } from "./styled.components";

const PostList = ({ posts, deletePost, editPost }) => (
  <PostListRoot>
    {posts.map((post) => (
      <PostItem
        key={post.id}
        post={post}
        editPost={editPost}
        deletePost={deletePost}
      />
    ))}
  </PostListRoot>
);
export default PostList;
