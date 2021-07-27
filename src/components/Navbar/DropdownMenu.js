import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import { Link } from "gatsby";

const NavLink = styled(Link)`
  color: #585858;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  margin-left: 0.5rem;
  margin-right: 1.5rem;
`;

const SignOut = styled.button`
  background-color: transparent;
  color: #585858;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  margin-left: 0.5rem;
  margin-right: 1.5rem;
`;

export default function DropdownMenu() {
  const { logout } = useAuth0();

  function DropdownLink(props) {
    return (
      <NavLink to={props.link} className="menu-item">
        {props.children}
      </NavLink>
    );
  }
  return (
    <div className="dropdown">
      <DropdownLink link="/">Library</DropdownLink>
      <DropdownLink link="/to-read">To-read</DropdownLink>
      <DropdownLink link="/add-book">Add Book</DropdownLink>
      <SignOut onClick={() => logout()} className="menu-item">
        Sign Out
      </SignOut>
    </div>
  );
}
