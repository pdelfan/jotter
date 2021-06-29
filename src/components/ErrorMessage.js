import React, { useState } from "react";
import styled from "styled-components";

const Error = styled.div`
  background-color: #fcebee;
  border: 2px solid #e2516c;
  border-radius: 0.9rem;
  padding: 0.5rem 1rem;
  margin-top: 2rem;
`;
const Button = styled.button`
  font-weight: 600;
  color: #e2516c;
  background-color: transparent;
  border: 2px solid #e2516c;
  border-radius: 0.9rem;
  padding: 0.3rem 1rem;
  margin-top: 1rem;

  &:hover {
    background-color: #e2516c;
    color: white;
  }
`;

const Title = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  color: #e2516c;
  margin: 0;
`;

const Description = styled.p`
  margin: 0;
`;

const ErrorMessage = ({ message }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div>
      {isOpen && (
        <Error>
          <Title>Error</Title>
          <Description>{message}</Description>
          <Button onClick={() => setIsOpen(!isOpen)}>Ok</Button>
        </Error>
      )}
    </div>
  );
};

export default ErrorMessage;
