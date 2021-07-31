import React from "react";
import Layout from "../components/Page/Layout";
import { useAuth0 } from "@auth0/auth0-react";
import LoadingIcon from "../assets/loading.svg";
import { BookContainer } from "../components/Book/BookContainer";
import { Wrapper, Loading } from "../components/Notification & Error/Loading";
import useFetchGoogleBook from "../hooks/useFetchGoogleBook";
import useFetchMongoField from "../hooks/useFetchMongoField";
import { getPercentageRead, getNotes } from "../services/realm/API";
import ReadingProgress from "../components/Book/ReadingProgress";
import Header from "../components/Page/Headings";
import { Link } from "gatsby";
import styled from "styled-components";
import Note, { NoteContainer } from "../components/Note/Note";
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
  border: var(--general-border);
  box-shadow: var(--general-shadow);

  &:hover {
    border: 2px solid #555;
    color: #555;
  }
`;

const Book = ({ location }) => {
  const { user } = useAuth0();
  const isbn = queryString.parse(location.search).id;

  const { data: book, hasFetched: fetchedBook } = useFetchGoogleBook(isbn);
  const { data: read, hasFetched: fetchedPercentageRead } = useFetchMongoField(
    user,
    isbn,
    getPercentageRead
  );
  const { data: notes, hasFetched: fetchedNotes } = useFetchMongoField(
    user,
    isbn,
    getNotes
  );

  if (isbn === null) {
    return <RedirectHome />;
  }
  return (
    <Layout>
      <Header header="Book" subheader="In your library" />

      {fetchedBook && fetchedPercentageRead && (
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
          <ReadingProgress
            percentage={read}
            isbn={book.isbn}
            user={user.email}
          />
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
              <Note
                title={note.noteTitle}
                date={note.date}
                key={note._noteID}
                noteID={note._noteID}
                content={note.content}
                user={user.email}
                bookID={isbn}
              />
            );
          })}
        </NoteContainer>
      )}
    </Layout>
  );
};

export default Book;
