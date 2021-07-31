import React from "react";
import styled from "styled-components";
import {
  warning,
  success,
  generalError,
  specificError,
} from "../Notification & Error/Notifications";
import { addNote } from "../../services/realm/API";
import { navigate } from "gatsby";

const AddButton = styled.button`
  background-color: transparent;
  color: #555;
  font-weight: bold;
  border: 2px solid #555;
  padding: 0.5rem 1rem;  
  bottom: 2rem;  

  &:hover {
    border: 2px solid #333;
    color: #333;
  }
`;

function handleAddNote(
  username,
  title,
  content,
  date,
  bookID,
  noteID,
  redirectAfterAdd
) {
  addNote(username, date, title, content, bookID, noteID).then(
    (res) => {
      if (res.status === 200) {
        success("Added the note to your book.");
        navigate(redirectAfterAdd);
      } else {
        warning("Couldn't add this note. Try again.");
      }
    },
    (error) => {
      if (error === 400) {
        generalError("Invalid request: Couldn't add this note.");
      } else {
        specificError(
          error,
          "Something went wrong. Check your internet connection and try again."
        );
      }
    }
  );
}

export default function AddNoteButton({
  username,
  title,
  content,
  date,
  bookID,
  noteID,
  redirectAfterAdd,
}) {
  return (
    <AddButton
      onClick={() =>
        handleAddNote(
          username,
          title,
          content,
          date,
          bookID,
          noteID,
          redirectAfterAdd
        )
      }
    >
      Add Note
    </AddButton>
  );
}
