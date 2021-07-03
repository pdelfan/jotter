import React from "react";
import styled from "styled-components";
import PlusIcon from "../../assets/plus.svg";
import { addBookToLibrary } from "../../services/realm/API";
import {
  warning,
  success,
  generalError,
  specificError,
} from "../Notification & Error/Notifications";

const AddSign = styled.img`
  width: 0.8rem;
`;

const AddBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 0.3rem;
  padding: 0.4rem 0.7rem;
  border-radius: 0.9rem;
  background-color: var(--mid-gray);
  color: white;
  font-size: 0.9rem;

  &:hover {
    background-color: var(--button-hover);
  }
`;

const AddToLibraryButton = ({ username, title, author, date, cover, isbn }) => {
  return (
    <AddBtn
      onClick={() => {
        addBookToLibrary(
          username,
          title,
          author,
          date,
          cover,
          new Date(),
          isbn
        ).then(
          (res) => {
            if (res.inLibrary === true) {
              warning("This book is already in your library.");
            } else if (res.inToRead === true) {
              warning("This book is already in your to-read.");
            } else {
              success("Added book to your library.");
            }
          },
          (error) => {
            if (error === 400) {
              generalError(
                "Invalid request: Couldn't add this book to your library."
              );
            } else {
              specificError(
                error,
                "Something went wrong. Check your internet connection and try again."
              );
            }
          }
        );
      }}
    >
      <AddSign src={PlusIcon} alt="Add icon" />
      Library
    </AddBtn>
  );
};

export default AddToLibraryButton;
