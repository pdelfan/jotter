import React from "react";
import styled from "styled-components";
import { deleteBook } from "../../services/realm/API";
import { DeleteIcon } from "./Icons";
import {
  success,
  generalError,
  specificError,
  warning,
} from "../Notification & Error/Notifications";
import { navigate } from "gatsby";

const DeleteBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 0.3rem;
  padding: 0.4rem 0.7rem;  
  background-color: transparent;
  color: #ff3333;
  border: 2px solid #ff3333;
  font-size: 0.9rem;
  font-weight: bold;

  &:hover {
    border: 2px solid #db2b2b;
    color: #db2b2b;
  }
`;

function handleDeleteBook(username, isbn, redirectAfterDelete) {
  deleteBook(username, isbn).then(
    (res) => {
      if (res.status === 200) {
        success("Deleted the book.");
        navigate(redirectAfterDelete);
      } else {
        warning("Couldn't delete this book. Try again.");
      }
    },
    (error) => {
      if (error === 400) {
        generalError("Invalid request: Couldn't delete this book.");
      } else {
        specificError(
          error,
          "Something went wrong. Check your internet connection and try again."
        );
      }
    }
  );
}

const DeleteBookButton = ({ username, isbn, redirectAfterDelete }) => {
  return (
    <DeleteBtn
      onClick={() => handleDeleteBook(username, isbn, redirectAfterDelete)}
    >
      <DeleteIcon />
      Delete
    </DeleteBtn>
  );
};

export default DeleteBookButton;
