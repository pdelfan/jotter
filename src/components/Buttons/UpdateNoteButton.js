import React from "react";
import styled from "styled-components";
import {
  warning,
  success,
  generalError,
  specificError,
} from "../Notification & Error/Notifications";
import { updateNote } from "../../services/realm/API";
import { navigate } from "gatsby";

const UpdateButton = styled.button`
  background-color: transparent;
  font-weight: bold;
  border: 2px solid #3aae5b;
  color: #3aae5b;
  padding: 0.5rem 1rem;
  bottom: 1rem;
  z-index: 1000;
  &:hover {
    border: 2px solid #31944d;
    color: #31944d;
  }
`;

function handleUpdateNote(
  username,
  title,
  content,
  bookID,
  noteID,
  redirectAfterAdd
) {
  updateNote(username, title, content, bookID, noteID).then(
    (res) => {
      if (res.status === 200) {
        success("Updated the note.");    
        console.log(content);
        navigate(redirectAfterAdd);
      } else {
        warning("Couldn't update this note. Try again.");
      }
    },
    (error) => {
      if (error === 400) {
        generalError("Invalid request: Couldn't update this note.");
      } else {
        specificError(
          error,
          "Something went wrong. Check your internet connection and try again."
        );
      }
    }
  );
}

export default function UpdateNoteButton({
  username,
  title,
  content,
  bookID,
  noteID,
  redirectAfterAdd,
}) {
  return (
    <UpdateButton
      onClick={() =>
        handleUpdateNote(
          username,
          title,
          content,
          bookID,
          noteID,
          redirectAfterAdd
        )
      }
    >
      Save
    </UpdateButton>
  );
}
