import React from "react";
import Layout from "../components/Page/Layout";
import LoadingIcon from "../assets/loading.svg";
import { useAuth0 } from "../services/auth";
import BookItem, { BookList } from "../components/Book/LibraryBook";
import { getToRead } from "../services/realm/API";
import { Wrapper, Loading } from "../components/Loading";
import useFetchMongoBooks from "../hooks/useFetchMongoBooks";
import ErrorMessage from "../components/ErrorMessage";

export default function ToRead() {
  const { user } = useAuth0();
  const {
    data: toReadBooks,
    hasFetched,
    error,
  } = useFetchMongoBooks({ user: user, from: getToRead });

  return (
    <Layout heading="To-read" subheading="The books you want to read later">
      {error && (
        <ErrorMessage message="Sorry, we ran into a problem while loading your to-read books. Try again by refreshing this page." />
      )}
      {toReadBooks && (
        <BookList>
          {toReadBooks.map((book) => {
            return (
              <BookItem
                key={book.bookTitle + book.cover}
                isbn={book.isbn}
                shouldHover={true}
                cover={book.cover}
                title={book.bookTitle}
                author={book.author.join(", ")}
                date={book.year}
              />
            );
          })}
        </BookList>
      )}
      {!hasFetched && (
        <Wrapper minHeight="50vh">
          <Loading
            minHeight="60vh"
            src={LoadingIcon}
            alt="Loading icon"
            className="rotating"
          />
        </Wrapper>
      )}
    </Layout>
  );
}
