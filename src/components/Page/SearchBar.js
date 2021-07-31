import React from "react";
import styled from "styled-components";
import SearchIcon from "../../assets/search.svg";

const SearchArea = styled.div`
  display: flex;
  justify-content: flex-end;  
  background: white;
  border: var(--general-border);
  border-radius: var(--round);
`;

const Form = styled.form`
  display: flex;
  border-radius: var(--round);
  flex-grow: 0;
`;

const Input = styled.input`
  padding: 0.7rem 1rem;
  border-radius: var(--round);
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
  padding: 0.2rem 0.4rem;
  border-radius: var(--round);
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
