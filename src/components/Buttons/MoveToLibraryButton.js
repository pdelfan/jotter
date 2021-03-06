import React from "react";
import styled from "styled-components";
import { navigate } from "gatsby";
import { MoveIcon } from "./Icons";
import {
  warning,
  success,
  generalError,
  specificError,
} from "../Notification & Error/Notifications";
import { moveBookToLibrary } from "../../services/realm/API";

const MoveBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 0.3rem;
  padding: 0.4rem 0.7rem;
  background-color: transparent;
  border: 2px solid #756d6d;
  color: #756d6d;
  font-size: 0.9rem;
  font-weight: bold;

  &:hover {
    border: 2px solid #474242;
    color: #474242;
  }
`;

function handleMoveToLibrary(username, isbn) {
  moveBookToLibrary(username, isbn).then(
    (res) => {
      if (res.status === 200) {
        success("Moved the book to your library.");
        navigate("/");
      } else {
        warning("Couldn't move this book to your library. Try again.");
      }
    },
    (error) => {
      if (error === 400) {
        generalError(
          "Invalid request: Couldn't move this book to your library."
        );
      } else {
        specificError(
          error,
          "Something went wrong. Check your internet connection and try again."
        );
      }
    }
  );
}

const MoveToLibraryButton = ({ username, isbn }) => {
  return (
    <MoveBtn onClick={() => handleMoveToLibrary(username, isbn)}>
      <MoveIcon color="#756d6d" />
      Move to library
    </MoveBtn>
  );
};

export default MoveToLibraryButton;
