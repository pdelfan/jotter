import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";

const Error = styled.div``;
const Button = styled.button``;

const ErrorMessage = ({ message }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (  
      <div>
      <Button onClick={() => setIsOpen(!isOpen)}>Toggle</Button>
      {isOpen ? (
        <Error>
        <p>Modal is open</p>
        </Error>
      ) : null}   
      </div>   
  );
};


export default ErrorMessage;