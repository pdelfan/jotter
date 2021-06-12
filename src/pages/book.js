import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { Heading, SubHeading, TopHeader } from "../components/Headings";
import { useAuth0 } from "../services/auth";
import LoadingIcon from "../assets/loading.svg";
import PrivateRoute, { RedirectHome } from "../components/Routing";
import Index from "../pages/index";
import { Router } from "@reach/router";
import styled from "styled-components";
import striptags from "striptags";
import CategoryIcon from "../assets/category.svg";
import AvgRatingIcon from "../assets/rating.svg";
import NumOfRatingsIcon from "../assets/number_ratings.svg";
import LanguageIcon from "../assets/language.svg";
import BarcodeIcon from "../assets/barcode.svg";
import LengthIcon from "../assets/length.svg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
`;

const Loading = styled.img`
  width: 8rem;
  margin: 1rem auto 1rem auto;
  -webkit-animation: spin 4s linear infinite;
  -moz-animation: spin 4s linear infinite;
  animation: spin 4s linear infinite;
  min-height: 50vh;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 3rem;
`;

const Divider = styled.hr`
  border: 1px solid #404040;
`;

const Primary = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const BookInfo = styled.div`
  display: flex;
`;
const Cover = styled.img`
  box-shadow: var(--book-shadow);
  border: var(--general-border);
  max-height: 200px;
`;
const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;

  h3 {
    font-size: 1.7rem;
    font-weight: 600;
    color: var(--book-title);
    line-height: 1.5rem;
    margin-top: 0.5rem;
    margin-bottom: 0.3rem;
  }

  h4 {
    font-size: 1rem;
    font-weight: 600;
    color: var(--book-author);
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  h5 {
    font-size: 1rem;
    font-weight: 500;
    color: var(--book-date);
    margin-top: 0;
  }
`;

const Description = styled.p`
  max-width: 50rem;
  margin-top: 2rem;
`;

const Secondary = styled.div`
  display: flex;
  flex: 0.5;

  // add media queries
`;

const Meta = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;

const Detail = styled.div`
  display: flex;
  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 12rem;
  }

  img {
    width: 40px;
  }

  h6 {
    font-size: 1rem;
    max-width: 10rem;
    margin: 0;
    text-align: center;
  }

  p {
    font-size: 0.9rem;
    max-width: 12rem;
    text-align: center;
  }
`;

const BookContainer = ({
  cover,
  title,
  author,
  date,
  desc,
  category,
  length,
  avgRating,
  ratings,
  language,
  isbn,
}) => {
  return (
    <Container>
      <Primary>
        <BookInfo>
          <Cover src={cover} alt="Book cover" />
          <MainInfo>
            <h3>{title}</h3>
            <h4>{author}</h4>
            <h5>{date}</h5>
          </MainInfo>
        </BookInfo>
        <Description>{desc}</Description>
      </Primary>
      <Divider />
      <Secondary>
        <Meta>
          <Detail>
            <div>
              <img src={CategoryIcon} alt="Category icon" />
              <h6>Category</h6>
              <p>{category}</p>
            </div>
            <div>
              <img src={LengthIcon} alt="Length icon" />
              <h6>Length</h6>
              <p>{length}</p>
            </div>
          </Detail>
          <Detail>
            <div>
              <img src={AvgRatingIcon} alt="Average rating icon" />
              <h6>Google Books Average Rating</h6>
              <p>{avgRating}</p>
            </div>
            <div>
              <img src={NumOfRatingsIcon} alt="Number of ratings icon" />
              <h6>Number of Ratings</h6>
              <p>{ratings}</p>
            </div>
          </Detail>
          <Detail>
            <div>
              <img src={LanguageIcon} alt="Language (globe) icon" />
              <h6>Language</h6>
              <p>{language}</p>
            </div>
            <div>
              <img src={BarcodeIcon} alt="Barcode icon" />
              <h6>ISBN</h6>
              <p>{isbn}</p>
            </div>
          </Detail>
        </Meta>
      </Secondary>
    </Container>
  );
};

const Book = ({ location }) => {
  const { isAuthenticated, isLoading } = useAuth0();
  const isbn = location.state ? location.state.isbn : "";
  const [book, setBook] = useState(null);
  const [fetchedBook, setFetchedBook] = useState(false);

  useEffect(() => {
    setFetchedBook(false);
    fetch(`https://www.googleapis.com/books/v1/volumes/${isbn}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setBook(res);
        console.log(res);
        setFetchedBook(true);
      })
      .catch((err) => console.log(err.message));
  }, [isbn]);

  if (location.state === null) {
    return <RedirectHome />;
  } else if (isAuthenticated && !isLoading && isbn !== null) {
    return (
      <Layout>
        <TopHeader>
          <div>
            <Heading>Book</Heading>
            <SubHeading>In your library</SubHeading>
          </div>
        </TopHeader>
        {fetchedBook ? (
          <BookContainer
            cover={book.volumeInfo.imageLinks.thumbnail}
            title={
              book.volumeInfo.title
                ? book.volumeInfo.title
                : "Title not Avaialble"
            }
            author={
              book.volumeInfo.authors
                ? book.volumeInfo.authors
                : "Author not available"
            }
            date={
              book.volumeInfo.publishedDate
                ? book.volumeInfo.publishedDate
                : "Date not available"
            }
            desc={
              book.volumeInfo.description
                ? striptags(book.volumeInfo.description)
                : "No description avaiable for this book."
            }
            category={
              book.volumeInfo.categories === undefined
                ? "N/A"
                : book.volumeInfo.categories[0]
            }
            length={
              book.volumeInfo.pageCount ? book.volumeInfo.pageCount : "N/A"
            }
            avgRating={
              book.volumeInfo.averageRating
                ? book.volumeInfo.averageRating
                : "N/A"
            }
            ratings={
              book.volumeInfo.ratingsCount
                ? book.volumeInfo.ratingsCount
                : "N/A"
            }
            language={
              book.volumeInfo.language ? book.volumeInfo.language : "N/A"
            }
            isbn={book.id ? book.id : "N/A"}
          />
        ) : (
          <Wrapper>
            <Loading
              src={LoadingIcon}
              alt="Loading icon"
              className="rotating"
            />
          </Wrapper>
        )}
      </Layout>
    );
  } else {
    return (
      <Router>
        <PrivateRoute path="/book" component={Index} />
      </Router>
    );
  }
};

export default Book;
