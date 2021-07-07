import axios from "axios";
import { baseurl } from "../../../gatsby-browser";

export const getLibrary = async (username) => {
  try {
    const books = await axios.get(`${baseurl}get-library?user=${username}`);
    return books.data[0].library;
  } catch (error) {
    console.error("getLibrary error:", error);
  }
};

export const addBookToLibrary = async (
  username,
  bookTitle,
  author,
  year,
  cover,
  addDate,
  isbn
) => {
  try {
    let response = await axios.post(`${baseurl}add-book-library`, null, {
      params: {
        user: username,
        title: bookTitle,
        bookAuthor: author,
        bookYear: year,
        bookCover: cover,
        bookAddedDate: addDate,
        bookIsbn: isbn,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getToRead = async (username) => {
  try {
    const books = await axios.get(`${baseurl}get-to-read?user=${username}`);
    return books.data[0].toRead;
  } catch (error) {
    console.error("getToRead error:", error);
  }
};

export const addBookToToRead = async (
  username,
  bookTitle,
  author,
  year,
  cover,
  addDate,
  isbn
) => {
  try {
    let response = await axios.post(`${baseurl}add-book-to-read`, null, {
      params: {
        user: username,
        title: bookTitle,
        bookAuthor: author,
        bookYear: year,
        bookCover: cover,
        bookAddedDate: addDate,
        bookIsbn: isbn,
      },
    });

    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const updatePercentageRead = async (username, isbn, readPercentage) => {
  try {
    let response = await axios.post(`${baseurl}update-percentage-read`, null, {
      params: {
        user: username,
        bookID: isbn,
        percentageRead: readPercentage,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getPercentageRead = async (username, isbn) => {
  try {
    const percentageRead = await axios.get(
      `${baseurl}get-percentage-read?user=${username}&bookID=${isbn}`
    );
    return percentageRead.data;
  } catch (error) {
    console.error("getToRead error:", error);
  }
};

export const deleteBook = async (username, isbn) => {
  try {
    let response = await axios.post(`${baseurl}delete-book`, null, {
      params: {
        user: username,
        bookID: isbn,
      },
    });
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const moveBookToLibrary = async (username, isbn) => {
  try {
    let response = await axios.post(`${baseurl}move-to-library`, null, {
      params: {
        user: username,
        bookID: isbn,
      },
    });
    return response;
  } catch (error) {
    throw new Error(error);
  }
};
