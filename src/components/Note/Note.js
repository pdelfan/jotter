import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

export const NoteContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 3rem;
  gap: 1rem;
`;

const Wrapper = styled.div`
  background-color: #fdfdfd;
  padding: 1rem;
  border: var(--general-border);
  border-radius: var(--round);

  &:hover {
    border: 2px solid #4c4c4c;
  }
`;

const Title = styled.h5`
  color: black;
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0;
`;
const Date = styled.h6`
  color: var(--book-author);
  font-size: 0.8rem;
  font-weight: 600;
  margin: 0;
`;

const Note = ({ title, date }) => {
  return (
    <Wrapper>
      <Link to="/note">
        <Title>{title}</Title>
        <Date>{date}</Date>
      </Link>
    </Wrapper>
  );
};

export default Note;
