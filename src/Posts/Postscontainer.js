import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  fetchPosts,
  deletePostAndFetch,
  editPostAndFetch,
  addPosstAndFetch,
} from "./actions/postsAction";
import PostList from "./components/PostList";
import { PostHeader } from "./components/styled.components";
import Pagination from "./components/Pagination";
import AddNewPostModal from "./components/AddPost/AddNewPostModal";
function Postscontainer({
  posts,
  fetching,
  error,
  fetchPosts,
  count,
  deletePostAndFetch,
  editPostAndFetch,
  addPosstAndFetch,
}) {
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

  const deletePost = (id) => {
    deletePostAndFetch(id, pagination);
  };

  const editPost = (postObject) => {
    editPostAndFetch(postObject, pagination);
  };

  const addPost = (postObject) => {
    addPosstAndFetch(postObject, pagination);
  };

  return (
    <div>
      <PostHeader>
        <h1>Posts</h1>
      </PostHeader>
      <AddNewPostModal addPost={addPost} />

      {PaginationComponent}
      <PostList posts={posts} editPost={editPost} deletePost={deletePost} />
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
  deletePostAndFetch,
  editPostAndFetch,
  addPosstAndFetch,
};

export default connect(mapStateToProps, mapDispatchToProps)(Postscontainer);
