import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBold,
  faUnderline,
  faItalic,
  faStrikethrough,
  faHighlighter,
  faCode,
  faListOl,
  faListUl,
  faQuoteRight,
  faFileCode,
} from "@fortawesome/free-solid-svg-icons";

const icons = {
  faBold,
  faUnderline,
  faItalic,
  faStrikethrough,
  faHighlighter,
  faCode,
  faListOl,
  faListUl,
  faQuoteRight,
  faFileCode,
};

const Button = styled.button`
border-radius: 0.5rem;
  background-color: transparent;
  color: #7F8B99;
  ${({ active }) =>
    active &&
    `color: black;`}
  font-size: 1.2rem;
`;

const StyleButton = (props) => {
  const onToggle = (e) => {
    e.preventDefault();
    props.toggleStyle(props.style);
  };

  return (
    <Button onMouseDown={onToggle} active={props.active}>
      <FontAwesomeIcon icon={icons[props.label]} />
    </Button>
  );
};

export default StyleButton;
