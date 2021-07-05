import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 1rem;
  row-gap: 1rem;
  margin-bottom: 2rem;
`;

export default function ButtonContainer({ children }) {
  return <Container>{children}</Container>;
}
