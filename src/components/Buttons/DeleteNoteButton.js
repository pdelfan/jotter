import React from "react";
import styled from "styled-components";
import {
  warning,
  success,
  generalError,
  specificError,
} from "../Notification & Error/Notifications";
import { deleteNote } from "../../services/realm/API";
import { navigate } from "gatsby";

const DeleteButton = styled.button`
  background-color: transparent;
  color: #ff3333;
  border: 2px solid #ff3333;
  font-weight: bold;
  padding: 0.5rem 1rem;
  bottom: 1rem;
  margin-left: auto;
  z-index: 1000;
  &:hover {
    border: 2px solid #db2b2b;
    color: #db2b2b;
  }
`;

function handleDeleteNote(username, bookID, noteID, redirectAfterAdd) {
  deleteNote(username, bookID, noteID).then(
    (res) => {
      if (res.status === 200) {
        success("Deleted the note.");
        navigate(redirectAfterAdd);
      } else {
        warning("Couldn't delete this note. Try again.");
      }
    },
    (error) => {
      if (error === 400) {
        generalError("Invalid request: Couldn't delete this note.");
      } else {
        specificError(
          error,
          "Something went wrong. Check your internet connection and try again."
        );
      }
    }
  );
}

export default function DeleteNoteButton({
  username,
  bookID,
  noteID,
  redirectAfterDelete,
}) {
  return (
    <DeleteButton
      onClick={() =>
        handleDeleteNote(username, bookID, noteID, redirectAfterDelete)
      }
    >
      Delete
    </DeleteButton>
  );
}
