import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: ${(props) => props.minHeight || "50rem"};
`;

export const Loading = styled.img`
  width: 8rem;
  margin: 1rem auto 1rem auto;
  -webkit-animation: spin 4s linear infinite;
  -moz-animation: spin 4s linear infinite;
  animation: spin 4s linear infinite;
  min-height: ${(props) => props.minHeight || "50rem"};
`;
