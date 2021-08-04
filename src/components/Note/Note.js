import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

export const NoteContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 3rem;
  gap: 1rem;
`;

const Wrapper = styled(Link)`  
  padding: 1rem;
  border: var(--purple-border);
  border-radius: var(--round);

  &:hover {
    border: var(--purple-border-hover);
  }
`;

const Title = styled.h5`
  color: #4C3E67;
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0;
  max-width: 25rem;
`;
const Date = styled.h6`
  color: #4C3E67;
  font-size: 0.9rem;
  font-weight: normal;
  margin-top: 1rem;
  margin-bottom: 0;
`;

const NoteBlock = ({ title, date, noteID, bookID }) => {
  return (
    <Wrapper
      to={`/note?book=${bookID}&note=${noteID}`}
    >
      <Title>{title}</Title>
      <Date>{date}</Date>
    </Wrapper>
  );
};

export default NoteBlock;
