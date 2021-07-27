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

const UpdateNoteButton = ({ title, date, noteID, bookID, content, user }) => {
  return (
    <Wrapper
      to="/note"
      onClick={() => {
        localStorage.setItem("bookID", bookID);
        localStorage.setItem("noteID", noteID);
        localStorage.setItem("content", content);
        localStorage.setItem("title", title);
        localStorage.setItem("date", date);
        localStorage.setItem("user", user);
        localStorage.setItem("readOnly", true);
      }}
    >
      <Title>{title}</Title>
      <Date>{date}</Date>
    </Wrapper>
  );
};

export default UpdateNoteButton;
