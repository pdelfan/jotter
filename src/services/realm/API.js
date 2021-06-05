import axios from "axios";
import { baseurl } from "../../../gatsby-browser";

export const getLibrary = async (username) => {
  try {
    const books = await axios.get(`${baseurl}library?user=${username}`);
    return books.data[0].library;
  } catch (error) {
    console.error("getLibrary error:", error);
  }
};

export const addBooktoLibrary = async (
  username,
  bookTitle,
  author,
  year,
  cover,
  addDate,
  isbn
) => {
  try {
    axios
      .post(`${baseurl}add-book-library`, null, {
        params: {
          user: username,
          title: bookTitle,
          bookAuthor: author,
          bookYear: year,
          bookCover: cover,
          bookAddedDate: addDate,
          bookIsbn: isbn,
        },
      })
      .then(console.log("added book to library"));
  } catch (error) {
    console.error("error (couldn't add book to library):", error.response);
  }
};
