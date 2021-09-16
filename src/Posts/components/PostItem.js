import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPen,
  faWindowClose,
  faSave,
} from "@fortawesome/free-solid-svg-icons";

const PostItem = ({ post, deletePost, editPost }) => {
  const [isEditMode, setEditMod] = useState(false);
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  const onTitleChange = (e) => setTitle(e.target.value);
  const onBodyChange = (e) => setBody(e.target.value);

  const onEditBtnClick = () => {
    setEditMod(true);
  };
  const onCancelEdit = () => {
    setEditMod(false);
  };
  const onSaveClick = () => {
    setEditMod(false);
    editPost({
      ...post,
      title,
      body,
    });
  };

  const onDeletePost = () => {
    if (window.confirm("Are you sure?")) {
      deletePost(post.id);
    }
  };

  return (
    <div className="postItem">
      {!isEditMode && (
        <>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </>
      )}
      {isEditMode && (
        <div className="editDiv">
          <input type="text" value={title} onChange={onTitleChange} />
          <textarea rows="5" value={body} onChange={onBodyChange}></textarea>
        </div>
      )}
      <footer>
        {isEditMode && (
          <button className="edit-btn" onClick={onCancelEdit}>
            <FontAwesomeIcon icon={faWindowClose} />
          </button>
        )}
        {isEditMode && (
          <button className="edit-btn" onClick={onSaveClick}>
            <FontAwesomeIcon icon={faSave} />
          </button>
        )}
        {!isEditMode && (
          <button className="edit-btn" onClick={onEditBtnClick}>
            <FontAwesomeIcon icon={faPen} />
          </button>
        )}
        <button onClick={onDeletePost}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </footer>
    </div>
  );
};

export default PostItem;
