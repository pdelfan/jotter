import React from "react";
import Layout from "../components/Layout";
import { Heading, SubHeading, TopHeader } from "../components/Headings";
import { useAuth0 } from "../services/auth";
import LoadingIcon from "../assets/loading.svg";
import PrivateRoute, { RedirectHome } from "../components/Routing";
import Index from "../pages/index";
import { Router } from "@reach/router";
import { BookContainer } from "../components/Book";
import { Wrapper, Loading } from "../components/Loading";
import useFetchGoogleBook from "../hooks/useFetchBook";

const Book = ({ location }) => {
  const { isAuthenticated, isLoading } = useAuth0();
  const isbn = location.state ? location.state.isbn : "";
  const { data: book, hasFetched } = useFetchGoogleBook(isbn);

  if (location.state === null) {
    return <RedirectHome />;
  } else if (isAuthenticated && !isLoading && isbn !== null) {
    return (
      <Layout heading="Book" subheading="In your library">
        {hasFetched ? (
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
          />
        ) : (
          <Wrapper minHeight="50vh">
            <Loading
              minHeight="30vh"
              src={LoadingIcon}
              alt="Loading icon"
              className="rotating"
            />
          </Wrapper>
        )}
        <TopHeader>
          <div>
            <Heading>Notes</Heading>
            <SubHeading>All your notes on this book</SubHeading>
          </div>
        </TopHeader>
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
