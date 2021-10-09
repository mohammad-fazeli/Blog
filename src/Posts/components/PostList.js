import React from "react";
import PostItem from "./PostItem";
import { PostListRoot } from "./styled.components";
import ReactLoading from "react-loading";

const PostList = ({ posts, deletePost, editPost, fetching }) => (
  <PostListRoot>
    {fetching ? (
      <ReactLoading
        className="ReactLoading"
        type={"spinningBubbles"}
        color={"#333"}
        height={"auto"}
        width={200}
      />
    ) : (
      ""
    )}
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
