import React from "react";
import Layout from "../components/Page/Layout";
import { useAuth0 } from "@auth0/auth0-react";
import LoadingIcon from "../assets/loading.svg";
import { BookContainer } from "../components/Book/BookContainer";
import { Wrapper, Loading } from "../components/Notification & Error/Loading";
import useFetchGoogleBook from "../hooks/useFetchGoogleBook";
import useFetchMongoField from "../hooks/useFetchMongoField";
import { getPercentageRead, getNotes } from "../services/realm/API";
import ReadingProgress from "../components/Book/ReadingProgress/ReadingProgress";
import Header from "../components/Page/Headings";
import { Link } from "gatsby";
import styled from "styled-components";
import NoteBlock, { NoteContainer } from "../components/Note/Note";
import { AddIcon } from "../components/Buttons/Icons";
import { RedirectHome } from "../components/Routing";
import * as queryString from "query-string";

const AddNoteButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 0.3rem;
  background-color: white;
  color: #6b6b6b;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border: var(--gray-border);
  box-shadow: var(--general-shadow);

  &:hover {
    border: var(--gray-border-hover);
    color: #555;
  }
`;

const NoNotesMessage = styled.h3`
  color: #888;
  font-weight: normal;
  font-size: 1.3rem;
  margin: 2rem auto;
`;
const Book = ({ location }) => {
  const isbn = queryString.parse(location.search).id;
  const { isAuthenticated, user } = useAuth0();

  const { data: book, hasFetched: fetchedBook } = useFetchGoogleBook(isbn);
  const { data: read, hasFetched: fetchedPercentageRead } = useFetchMongoField(
    isbn,
    getPercentageRead,
    isAuthenticated
  );
  const { data: notes, hasFetched: fetchedNotes } = useFetchMongoField(
    isbn,
    getNotes,
    isAuthenticated
  );

  if (isbn === null) {
    return <RedirectHome />;
  }
  return (
    <Layout title={"Library — Book"}>
      <Header header="Book" subheader="In your library" />

      {fetchedBook && (
        <BookContainer
          cover={book.cover}
          title={book.title}
          author={book.author}
          date={book.date}
          desc={book.desc}
          category={book.category}
          length={book.length}
          avgRating={book.avgRating}
          ratings={book.ratings}
          language={book.language}
          isbn={book.isbn}
          username={user.email}
          deleteButton={true}
          redirectAfterDelete={"/"}
        >
          {fetchedPercentageRead && (
            <ReadingProgress
              percentage={read}
              isbn={book.isbn}
              user={user.email}
            />
          )}
        </BookContainer>
      )}

      {!fetchedBook && (
        <Wrapper minHeight="50vh">
          <Loading
            minHeight="30vh"
            src={LoadingIcon}
            alt="Loading icon"
            className="rotating"
          />
        </Wrapper>
      )}
      <Header header="Notes" subheader="All your notes on this book">
        <AddNoteButton
          to="/add-note"
          state={{
            isbn: isbn,
            user: user,
          }}
        >
          <AddIcon color="#6b6b6b" />
          Add Note
        </AddNoteButton>
      </Header>
      {fetchedNotes && (
        <NoteContainer>
          {notes.map((note) => {
            return (
              <NoteBlock
                title={note.noteTitle}
                date={note.date}
                key={note._noteID}
                noteID={note._noteID}
                bookID={isbn}
              />
            );
          })}
          {notes.length === 0 && (
            <NoNotesMessage>
              You don't have any notes for this book yet.
            </NoNotesMessage>
          )}
        </NoteContainer>
      )}
    </Layout>
  );
};

export default Book;
