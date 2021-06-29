import React, { useState } from "react";
import styled from "styled-components";
import PlusIcon from "../../assets/plus.svg";
import { addBookToLibrary } from "../../services/realm/API";
import ErrorMessage from "../ErrorMessage";

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
  const [error, setError] = useState(false);
  return (
    <div>
      <AddBtn
        onClick={async () => {
          let ress = await addBookToLibrary(
            username,
            title,
            author,
            date,
            cover,
            new Date(),
            isbn
          );
          if (!ress) {
            setError(true);
          }
        }}
      >
        <AddSign src={PlusIcon} alt="Add icon" />
        Library
      </AddBtn>
      {/* {error && (
        <ErrorMessage message="Sorry, we ran into a problem while adding this book to your library. Try again by refreshing this page." />
      )} */}
    </div>
  );
};

export default AddToLibraryButton;
