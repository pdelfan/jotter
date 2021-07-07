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
  border-radius: 2rem;
  background-color: ${(props) =>
    props.type === "toRead" ? "#805AD5" : "#2D3748"};
  color: white;
  font-size: 0.9rem;

  &:hover {
    background-color: ${(props) =>
      props.type === "toRead" ? "#704eb9" : "#1d2430"};
  }
`;

const AddButton = ({
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
          addFunction(
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
        }}
      >
        <AddIcon color="white" />
        {text}
      </AddBtn>
    </>
  );
};

export default AddButton;
