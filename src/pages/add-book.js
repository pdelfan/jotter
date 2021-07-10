import React, { useState } from "react";
import Layout from "../components/Page/Layout";
import Header from "../components/Page/Headings";
import SearchBar from "../components/Page/SearchBar";
import BookItem, { BookList, validate } from "../components/Book/Book";
import LoadingIcon from "../assets/loading.svg";
import { Loading } from "../components/Notification & Error/Loading";
import { searchGoogleBooks } from "../services/googleBooks";

const AddBook = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

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
        let books = res.items.map((item) => validate(item));
        setBooks([...books]);
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <Layout>
      <Header
        header="Add Book"
        subheader="Find a book and add it to your collection"
      >
        <SearchBar
          searchBook={searchBook}
          handleSearch={handleSearch}
          placeholder="Search for books"
          submittable={true}
        />
      </Header>
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
                to="/searched-book"
                isbn={book.isbn}
                cover={book.cover}
                title={book.title}
                author={book.author}
                date={book.date}
              />
            );
          })}
      </BookList>
    </Layout>
  );
};

export default AddBook;
