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

export const addBookToLibrary = (
  username,
  bookTitle,
  author,
  year,
  cover,
  addDate,
  isbn
) => {
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
    .catch(() => {
      console.error("ERROR BRO");
    });
};

// export const addBookToLibrary = async (
//   username,
//   bookTitle,
//   author,
//   year,
//   cover,
//   addDate,
//   isbn
// ) => {
//   try {
//     axios.post(`${baseurl}add-book-library`, null, {
//       params: {
//         user: username,
//         title: bookTitle,
//         bookAuthor: author,
//         bookYear: year,
//         bookCover: cover,
//         bookAddedDate: addDate,
//         bookIsbn: isbn,
//       },
//     })
//   } catch (error) {
//     console.error("error (couldn't add book to library):", error.response);
//   }
// };

export const getToRead = async (username) => {
  try {
    const books = await axios.get(`${baseurl}to-read?user=${username}`);
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
    axios
      .post(`${baseurl}add-book-to-read`, null, {
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
      .then(console.log("added book to to-read"));
  } catch (error) {
    console.error("error (couldn't add book to to-read):", error.response);
  }
};

export const updatePercentageRead = async (username, isbn, readPercentage) => {
  try {
    axios
      .post(`${baseurl}update-reading`, null, {
        params: {
          user: username,
          bookID: isbn,
          percentageRead: readPercentage,
        },
      })
      .then(
        console.log("Updated percentage read with the value: ", readPercentage)
      );
  } catch (error) {
    console.error("error (Couldn't update percentage read):", error.response);
  }
};

export const getPercentageRead = async (username, isbn) => {
  try {
    const percentageRead = await axios.get(
      `${baseurl}percentageRead?user=${username}&bookID=${isbn}`
    );
    return percentageRead.data;
  } catch (error) {
    console.error("getToRead error:", error);
  }
};
