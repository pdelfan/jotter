import React from "react";
import Layout from "../components/Page/Layout";
import { Heading, SubHeading, TopHeader } from "../components/Page/Headings";
import { useAuth0 } from "../services/auth";
import LoadingIcon from "../assets/loading.svg";
import PrivateRoute, { RedirectHome } from "../components/Routing";
import Index from "../pages/index";
import { Router } from "@reach/router";
import { BookContainer } from "../components/Book/BookPage";
import { Wrapper, Loading } from "../components/Loading";
import useFetchGoogleBook from "../hooks/useFetchGoogleBook";
import useFetchPercentageRead from "../hooks/useFetchPercentageRead";

const Book = ({ location }) => {
  const { isAuthenticated, isLoading, user } = useAuth0();
  const isbn = location.state ? location.state.isbn : "";
  const { data: book, hasFetched: hasFetchedBook } = useFetchGoogleBook(isbn);
  const { data: read, hasFetched: fetchedPercentageRead } =
    useFetchPercentageRead(user, isbn);

  if (location.state === null) {
    return <RedirectHome />;
  } else if (isAuthenticated && !isLoading && isbn !== null) {
    return (
      <Layout heading="Book" subheading="In your library">
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
            percentageRead={read}
            user={user.nickname}
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
