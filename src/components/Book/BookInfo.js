import React from "react";
import styled from "styled-components";
import ButtonContainer from "../Buttons/ButtonContainer";
import MoveToLibraryButton from "../Buttons/MoveToLibraryButton";
import DeleteBookButton from "../Buttons/DeleteBookButton";
import { addBookToLibrary, addBookToToRead } from "../../services/realm/API";
import AddButton from "../Buttons/AddButton";

const Container = styled.div`
  display: flex;
  flex-grow: 1;
  column-gap: 1.5rem;

  @media only screen and (max-width: 700px) {
    flex-wrap: wrap;
  }
`;
const Cover = styled.img`
  box-shadow: var(--book-shadow);
  border: var(--book-border);
  border-radius: var(--book-round);
  max-height: 200px;
  margin-bottom: 2rem;
`;
const MainInfo = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 1.8rem;
    font-weight: 600;
    color: var(--book-title);
    line-height: 2rem;
    word-wrap: break-word;
    margin-top: 0;
    margin-bottom: 0.3rem;
  }

  h4 {
    font-size: 1rem;
    font-weight: 600;
    color: var(--book-author);
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  h5 {
    font-size: 1rem;
    font-weight: 500;
    color: var(--book-date);
    margin-top: 0;
  }
`;

export default function BookInfo({
  cover,
  title,
  author,
  date,
  username,
  isbn,
  addButtons,
  moveButton,
  deleteButton,
  redirectAfterDelete,
}) {
  return (
    <Container>
      <Cover src={cover} alt="Book cover" />
      <MainInfo>
        <h3>{title}</h3>
        <h4>{author}</h4>
        <h5>{date}</h5>
        <ButtonContainer>
          {addButtons && (
            <>
              <AddButton
                text={"Library"}
                username={username}
                title={title}
                author={author}
                date={date}
                cover={cover}
                isbn={isbn}
                addFunction={addBookToLibrary}
              />
              <AddButton
                type={"toRead"}
                text={"To-read"}
                username={username}
                title={title}
                author={author}
                date={date}
                cover={cover}
                isbn={isbn}
                addFunction={addBookToToRead}
              />
            </>
          )}
          {moveButton && <MoveToLibraryButton />}
          {deleteButton && (
            <DeleteBookButton
              username={username}
              isbn={isbn}
              redirectAfterDelete={redirectAfterDelete}
            />
          )}
        </ButtonContainer>
      </MainInfo>
    </Container>
  );
}
