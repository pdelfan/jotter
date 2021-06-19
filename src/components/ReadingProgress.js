import React from "react";
import styled from "styled-components";
import UpdateButton from "./Buttons/UpdateButton";

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

const ReadingProgress = ({ percentage }) => {
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
    <Container>
      <Info>
        <Title>Reading Progress</Title>
        <ProgressBar value={percentage} max="100" />
        <Description>{handlePercentage(percentage)}</Description>
      </Info>
      <UpdateButton>Update</UpdateButton>
    </Container>
  );
};

export default ReadingProgress;
