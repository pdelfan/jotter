import React from 'react'
import styled from "styled-components";

const MainHeader = styled.h1`
    font-size: 3rem;
    margin-bottom: 0.5rem;
`

const SubHeader = styled.h2`
    font-weight: 600;   
    margin-top: 0; 
    margin-bottom: 0;
`

const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  row-gap: 2rem;
`;

export function TopHeader(props) {
    return <Header>{props.children}</Header>
}

export function Heading(props) {
    return (
       <MainHeader>{props.children}</MainHeader>
    )
}

export function SubHeading(props) {
    return (
        <SubHeader>{props.children}</SubHeader>
    )
}
