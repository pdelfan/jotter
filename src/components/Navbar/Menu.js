import styled from "styled-components";
import CaretIcon from "../../assets/more.inline.svg";
import DropdownMenu from "./DropdownMenu";
import DropdownButton from "./DropdownButton";
import Profile from "./Profile";
import JotterLogo from "../../assets/jotter-logo.inline.svg";
import LibraryIcon from "../../assets/library.svg";
import ToReadIcon from "../../assets/to-read.svg";
import AddIcon from "../../assets/add-book.svg";
import React from "react";
import { Link } from "gatsby";

const Header = styled.header`
  margin: auto;
  background-color: white;
  border-bottom: 2px solid #ccc;
`;

const Navbar = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 90rem;
  padding: 0.7rem 0.8rem;

  @media (max-width: 60rem) {
    justify-content: space-between;
  }
`;

const Logo = styled(Link)`
  display: flex;
  height: 1.5rem;
  object-fit: cover;

  &:hover {
    filter: brightness(50%);
  }

  @media (max-width: 60rem) {
    order: 1;
  }
`;

const MenuItems = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 60rem) {
    display: none;
    margin-top: 1rem;
  }
`;

const ItemContainer = styled.div`
  display: flex;
`;

const Item = styled(Link)`
  color: #999999;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  margin-left: 0.5rem;
  margin-right: 1.5rem;
  display: flex;

  > img {
    margin-right: 0.5rem;
    width: 18px;
  }

  &:hover {
    filter: brightness(50%);
  }
`;

export default function Menu() {
  return (
    <Header>
      <Navbar>
        <Logo to="/">
          <JotterLogo />
        </Logo>
        <DropdownButton icon={<CaretIcon />}>
          <DropdownMenu />
        </DropdownButton>
        <MenuItems>
          <ItemContainer>
            <Item to="/library">
              <img src={LibraryIcon} alt="Library icon" />
              Library
            </Item>
          </ItemContainer>
          <ItemContainer>
            <Item to="/to-read">
              <img src={ToReadIcon} alt="To-read icon" />
              To-read
            </Item>
          </ItemContainer>
          <ItemContainer>
            <Item to="/add-book">
              <img src={AddIcon} alt="Add icon" />
              Add Book
            </Item>
          </ItemContainer>
        </MenuItems>
        <Profile />
      </Navbar>
    </Header>
  );
}
