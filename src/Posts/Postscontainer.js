import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  fetchPostsAndShowToast,
  deletePostAndFetch,
  editPostAndFetch,
  addPosstAndFetch,
} from "./actions/postsAction";
import PostList from "./components/PostList";
import { PostHeader } from "./components/styled.components";
import Pagination from "./components/Pagination";
import AddNewPostModal from "./components/AddPost/AddNewPostModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Postscontainer({
  posts,
  fetchPostsAndShowToast,
  count,
  deletePostAndFetch,
  editPostAndFetch,
  addPosstAndFetch,
}) {
  const [pagination, setPagination] = useState({ limit: 5, page: 1 });

  useEffect(() => {
    fetchPostsAndShowToast(pagination, toast);
  }, [fetchPostsAndShowToast, pagination]);

  const PaginationComponent = (
    <Pagination
      count={count}
      pagination={pagination}
      setPagination={setPagination}
    />
  );

  const deletePost = (id) => {
    deletePostAndFetch(id, pagination, toast);
  };

  const editPost = (postObject) => {
    editPostAndFetch(postObject, pagination, toast);
  };

  const addPost = (postObject) => {
    addPosstAndFetch(postObject, pagination, toast);
  };

  return (
    <div>
      <ToastContainer />
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
  fetchPostsAndShowToast,
  deletePostAndFetch,
  editPostAndFetch,
  addPosstAndFetch,
};

export default connect(mapStateToProps, mapDispatchToProps)(Postscontainer);
