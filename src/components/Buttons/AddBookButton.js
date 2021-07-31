import React from "react";
import styled from "styled-components";
import { AddIcon } from "./Icons";
import {
  warning,
  success,
  generalError,
  specificError,
} from "../Notification & Error/Notifications";

const AddBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 0.3rem;
  padding: 0.4rem 0.7rem;
  
  background-color: ${(props) =>
    props.type === "toRead" ? "#999" : "#333"};
  color: white;
  font-size: 0.9rem;
  font-weight: bold;
  

  &:hover {
    background-color: ${(props) =>
      props.type === "toRead" ? "#777" : "#111"};
  }
`;

function handleAddBook(
  username,
  title,
  author,
  date,
  cover,
  isbn,
  addFunction,
  type
) {
  addFunction(username, title, author, date, cover, new Date(), isbn).then(
    (res) => {
      if (res.inLibrary === true) {
        warning("This book is already in your library.");
      } else if (res.inToRead === true) {
        warning("This book is already in your to-read.");
      } else {
        type === "toRead"
          ? success("Added book to your to-read.")
          : success("Added book to your library.");
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
}

const AddBookButton = ({
  text,
  username,
  title,
  author,
  date,
  cover,
  isbn,
  addFunction,
  type,
}) => {
  return (
    <>
      <AddBtn
        type={type}
        onClick={() => {
          handleAddBook(
            username,
            title,
            author,
            date,
            cover,
            isbn,
            addFunction
          );
        }}
      >
        <AddIcon color="white" />
        {text}
      </AddBtn>
    </>
  );
};

export default AddBookButton;
