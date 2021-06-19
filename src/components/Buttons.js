import React from "react";
import { useAuth0 } from "../services/auth";
import styled from "styled-components";
import Login from "../services/realm/userAuth";
import PlusIcon from "../assets/plus.svg";

const LoginBtn = styled.button`
  padding: 0.8rem 2rem;
  border-radius: 2rem;
  background-color: #1BD692;
  color: white;
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    background-color: #1acf8d;
  }
`;

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  const handleSignIn = () => {
    loginWithRedirect({});
    Login();
  };

  return <LoginBtn onClick={() => handleSignIn()}>Sign in</LoginBtn>;
};

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

export const AddToLibraryButton = ({ handleAddToLibrary }) => {
  return (
    <AddBtn onClick={handleAddToLibrary}>
      <AddSign src={PlusIcon} alt="Add icon" />
      Library
    </AddBtn>
  );
};

const ToReadBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 0.3rem;
  padding: 0.4rem 0.7rem;
  border-radius: 0.9rem;
  background-color: var(--purple);
  color: white;
  font-size: 0.9rem;

  &:hover {
    background-color: var(--button-hover);
  }
`;

export const AddToReadButton = ({ handleAddToToRead }) => {
  return (
    <ToReadBtn onClick={handleAddToToRead}>
      <AddSign src={PlusIcon} alt="Add icon" />
      To-read
    </ToReadBtn>
  );
};

export const ShowButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 0.3rem;
  padding: 0.4rem 0.7rem;
  border-radius: 0.9rem;
  background-color: #edf2f7;
  color: black;
  font-weight: 600;
  font-size: 0.9rem;

  &:hover {
    background-color: var(--button-hover);
    color: white;
  }
`;

export const UpdateButton = styled.button`
  background-color: #e9edf1;
  color: #5a5c62;
  font-weight: 600;
  font-size: 1rem;
  padding: 0.4rem 0.7rem;
  border-radius: 0.9rem;

  &:hover {
    background-color: #d6dce0;
  }
`;
