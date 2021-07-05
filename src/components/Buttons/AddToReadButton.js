import React from "react";
import styled from "styled-components";
import { addBookToToRead } from "../../services/realm/API";
import { AddIcon } from "./Icons";

import {
  warning,
  success,
  generalError,
  specificError,
} from "../Notification & Error/Notifications";

const ToReadBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 0.3rem;
  padding: 0.5rem 1rem;
  border-radius: 0.8rem;
  background-color: #8551f6;
  color: white;
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    background-color: #7e4ceb;
  }
`;


const AddToReadButton = ({ username, title, author, date, cover, isbn }) => {
  return (
    <>
      <ToReadBtn
        onClick={() =>
          addBookToToRead(
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
                  "Invalid request: Couldn't add this book to your to-read."
                );
              } else {
                specificError(
                  error,
                  "Something went wrong. Check your internet connection and try again."
                );
              }
            }
          )
        }
      >
        <AddIcon color="white" />
        To-read
      </ToReadBtn>
    </>
  );
};

export default AddToReadButton;
