import React from "react";
import styled from "styled-components";

const Submit = styled.button`
  background-color: #3aae5b;
  color: white;
  font-weight: 600;
  font-size: 1rem;
  padding: 0.4rem 0.7rem;
  margin-left: 1rem;
  border-radius: 0.9rem;

  &:hover {
    background-color: #37a556;
  }
`;

const SubmitButton = ({ handleSubmit }) => {
  return <Submit onClick={handleSubmit}>Submit</Submit>;
};

export default SubmitButton;
