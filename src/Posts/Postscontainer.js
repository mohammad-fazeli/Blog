import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "./actions/postsAction";

function Postscontainer({ posts, fetching, error, fetchPosts }) {
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
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
