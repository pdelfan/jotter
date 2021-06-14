import React from "react";
import styled from "styled-components";
import SearchIcon from "../assets/search.svg";

const SearchArea = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Form = styled.form`
  display: flex;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.1);
  border-radius: var(--round);
  flex-grow: 0;
`;

const Input = styled.input`
  padding: 0.8rem 1rem;
  border-radius: 15px 0 0 15px;
  border-top: var(--general-border);
  border-bottom: var(--general-border);
  border-left: var(--general-border);
  border-right: none;
  color: #949494;
  font-weight: 600;
  font-size: 1.1rem;

  ::placeholder {
    color: #bebebe;
  }
`;

const Button = styled.button`
  padding: 0.4rem 1rem;
  border-radius: 0 15px 15px 0;
  border-top: var(--general-border);
  border-bottom: var(--general-border);
  border-right: var(--general-border);
  border-left: none;
  background-color: white;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  > img {
    &:hover {
      filter: brightness(30%);
    }
  }
`;

const SearchBar = ({ searchBook, handleSearch, placeholder }) => {
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
        <Button type="submit">
          <img src={SearchIcon} alt="Search Icon" />
        </Button>
      </Form>
    </SearchArea>
  );
};

export default SearchBar;
