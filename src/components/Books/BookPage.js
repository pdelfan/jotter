import React, { useState } from "react";
import styled from "styled-components";
import CategoryIcon from "../../assets/category.svg";
import AvgRatingIcon from "../../assets/rating.svg";
import NumOfRatingsIcon from "../../assets/number_ratings.svg";
import LanguageIcon from "../../assets/language.svg";
import BarcodeIcon from "../../assets/barcode.svg";
import LengthIcon from "../../assets/length.svg";
import ShowButton from "../Buttons/ShowButton";
import ReadingProgress from "../ReadingProgress";

// dedicated book page (item + info + container)

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
  color: #374151;
  margin-top: 0;
  margin-bottom: 1rem;
`;

const Primary = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  flex-grow: 1;
  background-color: white;
  padding: 1.8rem;
  border: var(--general-border);
  border-radius: var(--round);
  box-shadow: var(--general-shadow);
`;

const BookInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 1.5rem;
`;
const Cover = styled.img`
  box-shadow: var(--book-shadow);
  border: var(--book-border);
  border-radius: var(--book-round);
  max-height: 200px;
  margin-bottom: 2rem;
`;
const MainInfo = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 1.8rem;
    font-weight: 600;
    color: var(--book-title);
    line-height: 2rem;
    word-wrap: break-word;
    margin-top: 0;
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

const Description = styled.div`
  p {
    margin-top: 0rem;
  }
`;

const Secondary = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.5;
  flex-grow: 0.7;
  row-gap: 2rem;

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
  background-color: white;
  padding: 1.8rem;
  border: var(--general-border);
  border-radius: var(--round);
  box-shadow: var(--general-shadow);
`;

const Detail = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 2rem;
  row-gap: 2rem;

  @media only screen and (max-width: 413px) {
    justify-content: center;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 10rem;
  }

  img {
    width: 35px;
  }

  h6 {
    font-size: 0.95rem;
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
`;

export const BookContainer = ({
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
  percentageRead,
}) => {
  const [showMore, setShowMore] = useState(false);
  const getText = (text, wordLimit) => {
    if (text.length <= wordLimit)
      return (
        <p
          dangerouslySetInnerHTML={{
            __html: text,
          }}
        />
      );
    if (text.length > wordLimit && showMore) {
      return (
        <>
          <p
            dangerouslySetInnerHTML={{
              __html: text,
            }}
          />

          <ShowButton onClick={() => setShowMore(false)}>Show Less</ShowButton>
        </>
      );
    }
    if (text.length > wordLimit) {
      return (
        <>
          <p
            dangerouslySetInnerHTML={{
              __html: text.slice(0, wordLimit) + "...",
            }}
          />

          <ShowButton onClick={() => setShowMore(true)}>Show more</ShowButton>
        </>
      );
    }
  };

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
        <Description>{getText(desc, 500)}</Description>
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
              <img src={LanguageIcon} alt="Language (globe) icon" />
              <h6>LANGUAGE</h6>
              <p>{language}</p>
            </div>
            <div>
              <img src={NumOfRatingsIcon} alt="Number of ratings icon" />
              <h6>RATINGS</h6>
              <p>{ratings}</p>
            </div>
            <div>
              <img src={AvgRatingIcon} alt="Average rating icon" />
              <h6>AVERAGE RATING</h6>
              <p>{avgRating}</p>
            </div>
            <div>
              <img src={BarcodeIcon} alt="Barcode icon" />
              <h6>ISBN</h6>
              <p>{isbn}</p>
            </div>
          </Detail>
        </Meta>
        <ReadingProgress percentage={percentageRead} />
      </Secondary>
    </Container>
  );
};
