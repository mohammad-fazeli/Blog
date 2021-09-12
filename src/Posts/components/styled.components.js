import styled from "styled-components";

export const PostListRoot = styled.div`
  padding: 20px;
  .postItem {
    padding: 10px;
    margin: 10px;
    box-shadow: 2px 2px 4px #000;
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
