import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "./actions/postsAction";
import PostList from "./components/PostList";
import { PostHeader } from "./components/styled.components";
import Pagination from "./components/Pagination";

function Postscontainer({ posts, fetching, error, fetchPosts, count }) {
  const [pagination, setPagination] = useState({ limit: 5, page: 1 });

  useEffect(() => {
    fetchPosts(pagination);
  }, [fetchPosts, pagination]);

  const PaginationComponent = (
    <Pagination
      count={count}
      pagination={pagination}
      setPagination={setPagination}
    />
  );
  return (
    <div>
      <PostHeader>
        <h1>Posts</h1>
      </PostHeader>
      {PaginationComponent}
      <PostList posts={posts} />
      {PaginationComponent}
    </div>
  );
}

const mapStateToProps = ({ posts, fetching, error, count }) => {
  return {
    posts,
    fetching,
    error,
    count,
  };
};

const mapDispatchToProps = {
  fetchPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Postscontainer);
