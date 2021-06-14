import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { Heading, SubHeading, TopHeader } from "../components/Headings";
import { useAuth0 } from "../services/auth";
import LoadingIcon from "../assets/loading.svg";
import PrivateRoute, { RedirectHome } from "../components/Routing";
import Index from "../pages/index";
import { Router } from "@reach/router";
import styled from "styled-components";
import CategoryIcon from "../assets/category.svg";
import AvgRatingIcon from "../assets/rating.svg";
import NumOfRatingsIcon from "../assets/number_ratings.svg";
import LanguageIcon from "../assets/language.svg";
import BarcodeIcon from "../assets/barcode.svg";
import LengthIcon from "../assets/length.svg";
import { Wrapper, Loading } from "../components/Loading";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 3rem;
  margin-bottom: 5rem;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
`;

const SectionTitle = styled.h5`
  font-size: 1.3rem;
  text-align: ${(props) => (props.center ? "center" : "")};
  color: #516079;
  margin-top: 0;
  margin-bottom: 1rem;
`;

const Primary = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  flex-grow: 1;
  background-color: white;
  padding: 2rem;
  border: var(--general-border);
  border-radius: var(--round);
  box-shadow: var(--general-shadow);
`;

const BookInfo = styled.div`
  display: flex;
`;
const Cover = styled.img`
  box-shadow: var(--book-shadow);
  border: var(--general-border);
  max-height: 200px;
  margin-bottom: 2rem;
`;
const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;

  h3 {
    font-size: 1.8rem;
    font-weight: 600;
    color: var(--book-title);
    line-height: 2rem;
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
  margin-top: 0rem;
`;

const Secondary = styled.div`
  display: flex;
  flex: 0.5;
  flex-grow: 0.7;

  background-color: white;
  padding: 2rem;
  border: var(--general-border);
  border-radius: var(--round);
  box-shadow: var(--general-shadow);

  @media only screen and (max-width: 1200px) {
    flex: 1;
    flex-basis: 100%;
  }
`;

const Meta = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex: 1;
`;

const Detail = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;

  @media only screen and (max-width: 600px) {
    flex: 1;
    flex-basis: 100%;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 2rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-basis: 10rem;

    @media only screen and (max-width: 600px) {
      flex-basis: 100%;
    }
  }

  img {
    width: 35px;
  }

  h6 {
    font-size: 1rem;
    font-weight: 600;
    max-width: 10rem;
    margin: 0;
    text-align: center;
    color: #afafb2;
  }

  p {
    font-size: 1rem;
    font-weight: 500;
    max-width: 12rem;
    text-align: center;
    margin: 0;
  }

  // add queries
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
        <SectionTitle>Description</SectionTitle>
        <Description
          dangerouslySetInnerHTML={{
            __html: desc,
          }}
        />
      </Primary>
      <Secondary>
        <Meta>
          <SectionTitle center>More Information</SectionTitle>
          <Detail>
            <div>
              <img src={CategoryIcon} alt="Category icon" />
              <h6>CATEGORY</h6>
              <p>{category}</p>
            </div>
            <div>
              <img src={LengthIcon} alt="Length icon" />
              <h6>LENGTH</h6>
              <p>{length} pages</p>
            </div>
            <div>
              <img src={AvgRatingIcon} alt="Average rating icon" />
              <h6>AVERAGE RATING</h6>
              <p>{avgRating}</p>
            </div>
          </Detail>
          <Detail>
            <div>
              <img src={NumOfRatingsIcon} alt="Number of ratings icon" />
              <h6># OF RATINGS</h6>
              <p>{ratings}</p>
            </div>
            <div>
              <img src={LanguageIcon} alt="Language (globe) icon" />
              <h6>LANGUAGE</h6>
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
                ? book.volumeInfo.description
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
                : "0"
            }
            language={
              book.volumeInfo.language ? book.volumeInfo.language : "N/A"
            }
            isbn={book.id ? book.id : "N/A"}
          />
        ) : (
          <Wrapper minHeight="50vh">
            <Loading
              minHeight="30vh"
              src={LoadingIcon}
              alt="Loading icon"
              className="rotating"
            />
          </Wrapper>
        )}
        <TopHeader>
          <div>
            <Heading>Notes</Heading>
            <SubHeading>All your notes on this book</SubHeading>
          </div>
        </TopHeader>
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
