import React from "react";
import Layout from "../components/Page/Layout";
import { useAuth0 } from "@auth0/auth0-react";
import LoadingIcon from "../assets/loading.svg";
import PrivateRoute, { RedirectHome } from "../components/Routing";
import Login from "../pages/login";
import { Router } from "@reach/router";
import { BookContainer } from "../components/Book/BookContainer";
import { Wrapper, Loading } from "../components/Notification & Error/Loading";
import useFetchGoogleBook from "../hooks/useFetchGoogleBook";
import Header from "../components/Page/Headings";

const SearchedBook = () => {
  const { isAuthenticated, user } = useAuth0();
  const isbn = localStorage.getItem("isbn");
  const { data: book, hasFetched: hasFetchedBook } = useFetchGoogleBook(isbn);

  if (isbn === null) {
    return <RedirectHome />;
  } else if (isAuthenticated && isbn !== null) {
    return (
      <Layout>
        <Header header="Book" subheader="From your search" />
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
            username={user.email}
            addButtons={true}
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
        <PrivateRoute path="/searched-book" component={Login} />
      </Router>
    );
  }
};

export default SearchedBook;
