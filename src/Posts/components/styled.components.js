import styled from "styled-components";

export const PostListRoot = styled.div`
  padding: 20px;
  .ReactLoading {
    position: absolute;
    top: 50%;
    left: 50%;
    right: auto;
    bottom: auto;
    margin-right: -50%;
    transform: translate(-50%, -50%);
  }
  .postItem {
    padding: 10px;
    margin: 10px;
    box-shadow: 2px 2px 4px #000;

    .editDiv {
      display: flex;
      flex-direction: column;
      input {
        margin-bottom: 10px;
        font-size: 14px;
      }
      textarea {
        font-size: 14px;
        margin-bottom: 10px;
      }
    }
  }
  footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    button {
      cursor: pointer;
      background: none;
      outline: none;
      border: none;
      font-size: 16px;
      color: red;
    }
    button:hover {
      color: #333;
    }

    .edit-btn {
      color: slategray;
      margin-right: 10px;
    }
    .edit-btn:hover {
      color: #333;
    }
  }
`;

export const PostHeader = styled.div`
  background: #333;
  padding: 20px;
  color: #eee;
  border-radius: 5px;
  margin: 10px 25px;
`;

export const PaginationRoot = styled.div`
  background: #eee;
  margin: 5px 25px;
  padding: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .page {
    margin: 0 5px;
  }
  button {
    cursor: pointer;
    margin: 0 10px;
    font-size: 18px;
    padding: 0 5px;
  }
`;
