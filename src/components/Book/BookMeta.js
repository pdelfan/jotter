import React from "react";
import styled from "styled-components";
import CategoryIcon from "../../assets/category.svg";
import AvgRatingIcon from "../../assets/rating.svg";
import NumOfRatingsIcon from "../../assets/number_ratings.svg";
import LanguageIcon from "../../assets/language.svg";
import BarcodeIcon from "../../assets/barcode.svg";
import LengthIcon from "../../assets/length.svg";
import { SectionTitle } from "./Section";

const Container = styled.div`
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
  margin-top: 1rem;
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

export default function Meta({
  category,
  length,
  language,
  ratings,
  avgRating,
  isbn,
}) {
  return (
    <Container>
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
          <p>{language.toUpperCase()}</p>
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
          <h6>Identifier</h6>
          <p>{isbn}</p>
        </div>
      </Detail>
    </Container>
  );
}
