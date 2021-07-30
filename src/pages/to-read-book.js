import React from "react";
import Layout from "../components/Page/Layout";
import { useAuth0 } from "@auth0/auth0-react";
import LoadingIcon from "../assets/loading.svg";
import { RedirectHome } from "../components/Routing";
import { BookContainer } from "../components/Book/BookContainer";
import { Wrapper, Loading } from "../components/Notification & Error/Loading";
import useFetchGoogleBook from "../hooks/useFetchGoogleBook";
import Header from "../components/Page/Headings";
import * as queryString from "query-string";

const Book = ({ location }) => {
  const { user } = useAuth0();
  const isbn = queryString.parse(location.search).id;
  const { data: book, hasFetched: hasFetchedBook } = useFetchGoogleBook(isbn);

  if (isbn === null) {
    return <RedirectHome />;
  } else {
    return (
      <Layout>
        <Header header="Book" subheader="In your to-read, for later" />
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
  }
};

export default Book;
