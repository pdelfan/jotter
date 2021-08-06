import styled from "styled-components";

export const ProgressBar = styled.progress`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  overflow: hidden;
  height: ${(props) => (props.thin ? "0.3rem" : "0.7rem")};
  width: ${(props) => (props.short ? "50%" : "100%")};
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
