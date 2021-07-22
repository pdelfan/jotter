import React from "react";
import styled from "styled-components";

const SaveButton = styled.button`
  background-color: #555;
  color: white;  
  padding: 0.5rem 1rem;
  position: fixed;  
  bottom:2rem;
  z-index: 1000;

  &:hover {
    background-color: #333;
  }
`;

export default function SaveNoteButton() {
  return <SaveButton>Save Note</SaveButton>;
}
