import { useState, useEffect } from "react";
import { fetchGoogleBooks } from "../services/googleBooks";
import NoCover from "../assets/noCover.png";

const book = {
  cover: null,
  title: null,
  author: null,
  date: null,
  desc: null,
  category: null,
  length: null,
  avgRating: null,
  ratings: null,
  language: null,
  isbn: null,
};

const validate = (res) => {
  book.cover =
    res.volumeInfo.imageLinks === undefined
      ? `${NoCover}`
      : res.volumeInfo.imageLinks.thumbnail;

  book.title = res.volumeInfo.title
    ? res.volumeInfo.title
    : "Title not Avaialble";

  book.author = res.volumeInfo.authors
    ? res.volumeInfo.authors
    : "Author not available";

  book.date = res.volumeInfo.publishedDate
    ? res.volumeInfo.publishedDate
    : "Date not available";

  book.desc = res.volumeInfo.description
    ? res.volumeInfo.description.replace(/(<([^>]+)>)/, "")
    : "No description avaiable for this book.";

  book.category =
    res.volumeInfo.categories === undefined
      ? "N/A"
      : res.volumeInfo.categories[0].split("/ ")[1];

  book.length = res.volumeInfo.pageCount ? res.volumeInfo.pageCount : "N/A";

  book.avgRating = res.volumeInfo.averageRating
    ? res.volumeInfo.averageRating
    : "N/A";

  book.ratings = res.volumeInfo.ratingsCount
    ? res.volumeInfo.ratingsCount
    : "0";

  book.language = res.volumeInfo.language ? res.volumeInfo.language : "N/A";

  book.isbn = res.id ? res.id : "N/A";

  return book;
};

const useFetchGoogleBook = (id) => {
  const [hasFetched, setHasFetched] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setHasFetched(false);
    fetchGoogleBooks(id)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData(validate(res));
        console.log(data);
        setHasFetched(true);
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
      });
  }, [id, data]);

  return { data, hasFetched, error };
};

export default useFetchGoogleBook;
