import React from "react";
import Layout from "../components/Page/Layout";
import { useAuth0 } from "../services/auth";
import LoadingIcon from "../assets/loading.svg";
import PrivateRoute, { RedirectHome } from "../components/Routing";
import Index from "../pages/index";
import { Router } from "@reach/router";
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

const AddNoteButton = styled(Link)`
  background-color: white;
  color: black;
  padding: 0.5rem 1rem;
  border: var(--general-border);
  box-shadow: var(--general-shadow);

  &:hover {
    border: 2px solid #555;
  }
`;

const Book = ({ location }) => {
  const { isAuthenticated, user } = useAuth0();
  const isbn = location.state ? location.state.isbn : "";
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

  if (location.state === null) {
    return <RedirectHome />;
  } else if (isAuthenticated && isbn !== null) {
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
            redirectAfterDelete={"/library"}
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
                  user={user}
                  bookID={isbn}
                />
              );
            })}
          </NoteContainer>
        )}
      </Layout>
    );
  } else {
    return (
      <Router>
        <PrivateRoute path="/book" component={Index} />
      </Router>
    );
  }
};

export default Book;
