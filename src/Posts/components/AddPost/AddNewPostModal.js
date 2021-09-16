import React, { useState } from "react";
import Modal from "react-modal";
import { v4 as uuidv4 } from "uuid";
import { ModalWrapper, AddWrapper } from "./styled.components";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
const AddNewPostModal = ({ addPost }) => {
  const [isOpen, setOpen] = useState(false);
  const [title, setTitle] = useState(null);
  const [body, setBody] = useState(null);
  const [userId, setUserId] = useState(null);

  const onTitleChange = ({ target: { value } }) => setTitle(value);
  const onBodyChange = ({ target: { value } }) => setBody(value);
  const onUserIdChange = ({ target: { value } }) => setUserId(value);

  const showModal = () => setOpen(true);
  const hideModal = () => {
    setOpen(false);
    setBody(null);
    setTitle(null);
    setUserId(null);
  };
  const isSaveButtonDisable = () => !title || !userId || !body;

  const onSaveClick = () => {
    hideModal();
    const postObject = {
      title,
      body,
      userId,
      id: uuidv4(),
    };

    addPost(postObject);
  };

  return (
    <AddWrapper>
      <button onClick={showModal}>ADD</button>
      <Modal style={customStyles} onRequestClose={hideModal} isOpen={isOpen}>
        <ModalWrapper>
          <div className="header">
            <h3>ADD A NEW POST</h3>
          </div>
          <div className="body">
            <input
              onChange={onUserIdChange}
              value={userId}
              type="text"
              placeholder="user id..."
            />
            <input
              onChange={onTitleChange}
              value={title}
              type="text"
              placeholder="title..."
            />
            <textarea
              onChange={onBodyChange}
              value={body}
              placeholder="body..."
              cols="35"
              rows="15"
            ></textarea>
          </div>
          <div className="footer">
            <button onClick={hideModal}>cancel</button>
            <button disabled={isSaveButtonDisable()} onClick={onSaveClick}>
              save
            </button>
          </div>
        </ModalWrapper>
      </Modal>
    </AddWrapper>
  );
};

export default AddNewPostModal;
