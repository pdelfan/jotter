import React, { useState, useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { updatePercentageRead } from "../../services/realm/API";
import {
  generalError,
  specificError,
  success,
} from "../Notification & Error/Notifications";

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
  float: right;
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

const UpdateButton = styled.button`
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

const ReadingProgress = ({ percentage, user, isbn }) => {
  const [isOpen, setIsOpen] = useState(false);
  const outside = useRef();
  const [progress, setProgress] = useState(percentage);
  const [inputValue, setInputValue] = useState("");
  const onChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    updatePercentageRead(user, isbn, inputValue).then(
      () => {
        setIsOpen(false);
        setProgress(inputValue);
        setInputValue("");
        success("Your reading progress has been updated");
      },
      (error) => {
        if (error === 400) {
          generalError(
            "Invalid request: Couldn't update your reading progress."
          );
        } else {
          specificError(
            error,
            "Something went wrong. Check your internet connection and try again."
          );
        }
      }
    );
  };

  useEffect(() => {
    const handleClick = (e) => {
      if (!outside?.current?.contains(e.target)) {
        setIsOpen(false);
        setInputValue("");
      }
    };
    document.addEventListener("mousedown", handleClick);
  }, [outside, progress]);

  function handlePercentage(progress) {
    if (progress === "0") {
      return "Not read";
    } else if (progress === "100") {
      return "Completed";
    } else {
      return `${progress}% read`;
    }
  }
  return (
    <div ref={outside}>
      <Container>
        <Info>
          <Title>Reading Progress</Title>
          <ProgressBar value={progress} max="100" />
          <Description>{handlePercentage(progress)}</Description>
        </Info>
        <UpdateButton onClick={() => setIsOpen(!isOpen)}>Update</UpdateButton>
      </Container>
      <Modal out={!isOpen}>
        <Input placeholder={progress} onChange={onChange} value={inputValue} />
        <Label>%</Label>
        <Submit onClick={handleSubmit}>Submit</Submit>
      </Modal>
    </div>
  );
};

export default ReadingProgress;
