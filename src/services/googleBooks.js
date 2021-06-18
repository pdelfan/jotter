export function searchGoogleBooks(keyword) {
  return fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${keyword}&maxResults=20`
  );
}

export function fetchGoogleBooks(bookID) {
  return fetch(`https://www.googleapis.com/books/v1/volumes/${bookID}`);
}
