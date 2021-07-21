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
import useFetchPercentageRead from "../hooks/useFetchPercentageRead";
import ReadingProgress from "../components/Book/ReadingProgress";
import Header from "../components/Page/Headings";
import AddNoteButton from "../components/Buttons/AddNoteButton";

const Book = ({ location }) => {
  const { isAuthenticated, user } = useAuth0();
  const isbn = location.state ? location.state.isbn : "";
  const { data: book, hasFetched: hasFetchedBook } = useFetchGoogleBook(isbn);
  const { data: read, hasFetched: fetchedPercentageRead } =
    useFetchPercentageRead(user, isbn);

  if (location.state === null) {
    return <RedirectHome />;
  } else if (isAuthenticated && isbn !== null) {
    return (
      <Layout>
        <Header header="Book" subheader="In your library" />

        {hasFetchedBook && fetchedPercentageRead && (
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

        {!hasFetchedBook && (
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
          <AddNoteButton />
        </Header>
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
