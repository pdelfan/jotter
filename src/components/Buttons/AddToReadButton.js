import React from "react";
import styled from "styled-components";
import PlusIcon from "../../assets/plus.svg";
import { addBookToToRead } from "../../services/realm/API";

const AddSign = styled.img`
  width: 0.8rem;
`;

const ToReadBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 0.3rem;
  padding: 0.4rem 0.7rem;
  border-radius: 0.9rem;
  background-color: #756d6d;
  color: white;
  font-size: 0.9rem;

  &:hover {
    background-color: var(--button-hover);
  }
`;

const AddToReadButton = ({ username, title, author, date, cover, isbn }) => {
  return (
    <ToReadBtn
      onClick={() =>
        addBookToToRead(username, title, author, date, cover, new Date(), isbn)
      }
    >
      <AddSign src={PlusIcon} alt="Add icon" />
      To-read
    </ToReadBtn>
  );
};

export default AddToReadButton;
