import { useState } from "react";
import styled from "styled-components";
import React from "react"

const Item = styled.div`
  width: calc(var(--nav-size) * 0.8);
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 60rem) {
    display: none;
  }
`;

export default function DropdownButton(props) {
  const [open, setOpen] = useState(false);
  return (
    <Item>
      <button className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </button>

      {open && props.children}
    </Item>
  );
}
