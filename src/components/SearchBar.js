import React from "react";
import styled from "styled-components";
import SearchIcon from "../assets/search.svg";

const SearchArea = styled.div`
  display: flex;
  justify-content: flex-end;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.1);
  background: white;
  border: var(--general-border);
  border-radius: 15px;
`;

const Form = styled.form`
  display: flex;
  border-radius: 15px;
  flex-grow: 0;
`;

const Input = styled.input`
  padding: 0.8rem 1rem;
  border-radius: 15px;
  border: none;
  color: #949494;
  font-weight: 600;
  font-size: 1.1rem;
  background: white;

  ::placeholder {
    color: #bebebe;
  }
`;

const Button = styled.button`
  padding: 0.3rem 0.6rem;
  border-radius: 15px;
  background-color: #bebebe;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover {
    background: #949494;
  }
`;

const Submit = styled.div`
  padding: 0.3rem;
`;

const SearchBar = ({ searchBook, handleSearch, placeholder, submittable }) => {
  if (submittable) {
    return (
      <SearchArea>
        <Form onSubmit={searchBook}>
          <Input
            type="text"
            name=""
            id=""
            required
            onChange={handleSearch}
            placeholder={placeholder}
          />
          <Submit>
            <Button type="submit">
              <img src={SearchIcon} alt="Search Icon" />
            </Button>
          </Submit>
        </Form>
      </SearchArea>
    );
  } else {
    return (
      <SearchArea>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Input
            type="text"
            name=""
            id=""
            required
            onChange={handleSearch}
            placeholder={placeholder}
          />
        </Form>
      </SearchArea>
    );
  }
};

export default SearchBar;
