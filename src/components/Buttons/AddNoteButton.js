import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const AddButton = styled(Link)`
  background-color: white;
  color: black;  
  padding: 0.5rem 1rem;
  border: var(--general-border);
  box-shadow: var(--general-shadow);

  &:hover {
    border: 2px solid #555;    
  }
`;

export default function AddNoteButton() {
  return <AddButton to="/add-note">Add Note</AddButton>;
}
