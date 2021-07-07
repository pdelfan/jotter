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

const Book = ({ location }) => {
  const { isAuthenticated, user } = useAuth0();
  const isbn = location.state ? location.state.isbn : "";
  const { data: book, hasFetched: hasFetchedBook } = useFetchGoogleBook(isbn);

  if (location.state === null) {
    return <RedirectHome />;
  } else if (isAuthenticated && isbn !== null) {
    return (
      <Layout heading="Book" subheading="In your to-read, for later">
        {hasFetchedBook && (
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
            username={user.nickname}
            moveButton={true}
            deleteButton={true}
            redirectAfterDelete={"/to-read"}            
          />
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
      </Layout>
    );
  } else {
    return (
      <Router>
        <PrivateRoute path="/to-read-book" component={Index} />
      </Router>
    );
  }
};

export default Book;
