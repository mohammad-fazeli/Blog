import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "./actions/postsAction";
import PostList from "./components/PostList";
import { PostHeader } from "./components/styled.components";

function Postscontainer({ posts, fetching, error, fetchPosts }) {
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <div>
      <PostHeader>
        <h1>Posts</h1>
      </PostHeader>
      <PostList posts={posts} />
    </div>
  );
}

const mapStateToProps = ({ posts, fetching, error }) => {
  return {
    posts,
    fetching,
    error,
  };
};

const mapDispatchToProps = {
  fetchPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Postscontainer);
