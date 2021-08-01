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
  row-gap: 1rem;
  justify-content: space-between;
  align-items: center;
  background-color: #fdfdfd;
  padding: 0.8rem 1.8rem;
  border: var(--gray-border);
  border-radius: var(--round);
`;

const Info = styled.div`
  flex-grow: 0.7;
`;

const Title = styled.h5`
  font-size: 1.3rem;
  color: #333;
  margin-bottom: 0.5rem;
  margin-top: 0;
`;

const ProgressBar = styled.progress`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  overflow: hidden;
  height: 0.7rem;
  width: 100%;
  background-color: #c4f1d8; // firefox
  border-radius: var(--round);

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
  font-weight: 700;
  margin-top: 0.5rem;
  margin-bottom: 0;
`;

const Modal = styled.div`
  display: flex;
  justify-content: space-between;
  float: right;
  background-color: #fdfdfd;
  padding: 0.8rem 1.8rem;
  margin-top: 0.5rem;
  border: var(--gray-border);
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
  border: var(--gray-border);
  font-weight: bold;
  font-size: 1rem;
  text-align: center;
  max-width: 5rem;
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
  background-color: transparent;
  border: 2px solid #888;
  color: #888;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.4rem 0.7rem;

  &:hover {
    border: 2px solid #555;
    color: #555;
  }
`;

const Submit = styled.button`
  background-color: transparent;
  border: 2px solid #3aae5b;
  color: #3aae5b;
  font-weight: bold;
  font-size: 1rem;
  padding: 0.4rem 0.7rem;
  margin-left: 1rem;

  &:hover {
    border: 2px solid #31944d;
    color: #31944d;
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
