import React, { useState, useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import UpdateButton from "./Buttons/UpdateButton";
import SubmitButton from "./Buttons/UpdatePercentageReadButton";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 0.8rem 1.8rem;
  border: var(--general-border);
  border-radius: var(--round);
  box-shadow: var(--general-shadow);
`;

const Info = styled.div`
  flex-grow: 0.7;
`;

const Title = styled.h5`
  font-size: 1.3rem;
  color: #374151;
  margin: 0;
`;

const ProgressBar = styled.progress`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  overflow: hidden;
  border-radius: var(--round);
  height: 0.7rem;
  width: 100%;
  background-color: #c4f1d8; // firefox
  &::-webkit-progress-bar {
    background-color: #c4f1d8;
  }

  &::-webkit-progress-value {
    background-color: #3aae5b;
  }

  &::-moz-progress-bar {
    background-color: #3aae5b;
  }
`;

const Description = styled.p`
  color: #3aae5b;
  font-weight: 500;
  margin: 0;
`;

const Modal = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  right: 1rem;
  background-color: white;
  padding: 0.8rem 1.8rem;
  margin-top: 0.5rem;
  border: var(--general-border);
  border-radius: var(--round);
  box-shadow: var(--general-shadow);
  visibility: ${(props) => (props.out ? "hidden" : "visible")};
  animation: ${(props) => (props.out ? fadeOut : fadeIn)} 0.1s linear;
  transition: visibility 0.1s linear;
`;

const fadeIn = keyframes`
  from {
    transform: scale(0.25);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    transform: scale(1);
    opacity: 1;
  }

  to {
    transform: scale(.25);
    opacity: 0;
  }
`;

const Input = styled.input`
  border-radius: 10rem;
  border: var(--general-border);
  font-weight: 600;
  font-size: 1rem;
  text-align: center;
  width: 5rem;
  color: gray;

  ::placeholder {
    text-align: center;
    color: darkgray;
  }
`;

const Label = styled.label`
  align-self: center;
  margin-left: 0.3rem;
  margin-right: 1rem;
  color: #949494;
  font-weight: 600;
`;

const ReadingProgress = ({ percentage, handleSubmit, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);  
  const outside = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (!outside?.current?.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
  }, [outside]);

  function handlePercentage(percentage) {
    if (percentage === "0") {
      return "Not read";
    } else if (percentage === "100") {
      return "Completed";
    } else {
      return `${percentage}% read`;
    }
  }
  return (
    <div ref={outside}>
      <Container>
        <Info>
          <Title>Reading Progress</Title>
          <ProgressBar value={percentage} max="100" />
          <Description>{handlePercentage(percentage)}</Description>
        </Info>
        <UpdateButton onClick={() => setIsOpen(!isOpen)}>Update</UpdateButton>
      </Container>
      <Modal out={!isOpen}>
        <Input
          placeholder={percentage}
          onChange={onChange}
        />
        <Label>%</Label>
        <SubmitButton handleSubmit={handleSubmit}>Submit</SubmitButton>
      </Modal>
    </div>
  );
};

export default ReadingProgress;
