import React, { useState } from "react";
import Layout from "../components/Page/Layout";
import { Heading, SubHeading, TopHeader } from "../components/Page/Headings";
import SearchBar from "../components/SearchBar";
import BookItem, { BookList } from "../components/Book/AddBook";
import AddToLibraryButton from "../components/Buttons/AddToLibraryButton";
import AddToReadButton from "../components/Buttons/AddToReadButton";
import NoCover from "../assets/noCover.png";
import LoadingIcon from "../assets/loading.svg";
import styled from "styled-components";
import { useAuth0 } from "../services/auth";
import { Loading } from "../components/Loading";
import { searchGoogleBooks } from "../services/googleBooks";

const BookButtons = styled.div`
  display: flex;
  column-gap: 0.5rem;
`;

const AddBook = () => {
  const { user } = useAuth0();
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const validate = (res) => {
    let book = {
      cover: null,
      title: null,
      author: null,
      date: null,
      isbn: null,
    };

    book.cover =
      res.volumeInfo.imageLinks === undefined
        ? `${NoCover}`
        : res.volumeInfo.imageLinks.thumbnail;

    book.title = res.volumeInfo.title
      ? res.volumeInfo.title
      : "Title not Avaialble";

    book.author = res.volumeInfo.authors
      ? res.volumeInfo.authors.join(", ")
      : "Author not available";

    book.date = res.volumeInfo.publishedDate
      ? res.volumeInfo.publishedDate.split("-")[0]
      : "Date not available";

    book.isbn = res.id ? res.id : "N/A";

    return book;
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const searchBook = (e) => {
    e.preventDefault();
    setLoading(true);
    searchGoogleBooks(search)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setLoading(false);
        let yoyo = res.items.map((item) => validate(item));
        setBooks([...yoyo]);
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <Layout>
      <TopHeader>
        <div>
          <Heading>Add Book</Heading>
          <SubHeading>Find a book and add it to your collection</SubHeading>
        </div>
        <SearchBar
          searchBook={searchBook}
          handleSearch={handleSearch}
          placeholder="Search for books"
          submittable={true}
        />
      </TopHeader>
      <BookList>
        {loading && (
          <Loading
            minHeight="60vh"
            src={LoadingIcon}
            alt="Loading icon"
            className="rotating"
          />
        )}

        {!loading &&
          books.map((book, i) => {
            return (
              <BookItem
                key={i}
                cover={book.cover}
                title={book.title}
                author={book.author}
                date={book.date}
              >
                <BookButtons>
                  <AddToLibraryButton
                    username={user.nickname}
                    title={book.title}
                    author={book.author}
                    date={book.date}
                    cover={book.cover}
                    isbn={book.isbn}
                  />
                  <AddToReadButton
                    username={user.nickname}
                    title={book.title}
                    author={book.author}
                    date={book.date}
                    cover={book.cover}
                    isbn={book.isbn}
                  />
                </BookButtons>
              </BookItem>
            );
          })}
      </BookList>
    </Layout>
  );
};

export default AddBook;
