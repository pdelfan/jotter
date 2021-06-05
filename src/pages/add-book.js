import React, { useState } from "react";
import Layout from "../components/Layout";
import { Heading, SubHeading } from "../components/Headings";
import SearchBar from "../components/SearchBar";
import BookItem, { BookList } from "../components/BookItem";
import { AddToLibraryButton, AddToReadButton } from "../components/Buttons";
import NoCover from "../assets/noCover.png";
import LoadingIcon from "../assets/loading.svg";
import styled from "styled-components";
import { addBooktoLibrary } from "../services/realm/API";
import { useAuth0 } from "../services/auth";
import { Router } from "@reach/router";
import PrivateRoute from "../components/Routing";
import Index from "../pages/index";

const TopHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  row-gap: 2rem;
`;

const BookButtons = styled.div`
  display: flex;
  column-gap: 0.5rem;
`;

const Loading = styled.img`
  width: 8rem;
  margin: 1rem auto 1rem auto;
  -webkit-animation: spin 4s linear infinite;
  -moz-animation: spin 4s linear infinite;
  animation: spin 4s linear infinite;
  min-height: 60vh;
`;

const AddBook = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const searchBook = (e) => {
    setLoading(true);
    e.preventDefault();
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=20`
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setLoading(false);
        setBooks([...res.items]);
        console.log(res);
      })
      .catch((err) => console.log(err.message));
  };
  if (isAuthenticated && !isLoading) {
    return (
      <Layout>
        <TopHeader>
          <div>
            <Heading>Add Book</Heading>
            <SubHeading>Find a book and add it to your collection</SubHeading>
          </div>
          <SearchBar searchBook={searchBook} handleSearch={handleSearch} />
        </TopHeader>
        <BookList>
          {loading ? (
            <Loading
              src={LoadingIcon}
              alt="Loading icon"
              className="rotating"
            />
          ) : (
            books.map((book, i) => {
              let title =
                book.volumeInfo.title === undefined
                  ? "Unknown Title"
                  : book.volumeInfo.title;
              let author =
                book.volumeInfo.authors !== undefined
                  ? book.volumeInfo.authors.join(", ")
                  : "Unknown Author";

              let image =
                book.volumeInfo.imageLinks === undefined
                  ? `${NoCover}`
                  : `${book.volumeInfo.imageLinks.thumbnail}`;
              let published =
                book.volumeInfo.publishedDate === undefined
                  ? "Unknown Date"
                  : book.volumeInfo.publishedDate.split("-")[0];
              let bookID = book.id;
              return (
                <BookItem
                  key={i}
                  cover={image}
                  title={title}
                  author={author}
                  date={published}
                >
                  <BookButtons>
                    <AddToLibraryButton
                      handleAddToLibrary={() =>
                        addBooktoLibrary(
                          user.nickname,
                          title,
                          author,
                          published,
                          image,
                          new Date(),
                          bookID
                        )
                      }
                    />
                    <AddToReadButton />
                  </BookButtons>
                </BookItem>
              );
            })
          )}
        </BookList>
      </Layout>
    );
  } else {
    return (
      <Router>
        <PrivateRoute path="/add-book" component={Index} />
      </Router>
    );
  }
};

export default AddBook;
