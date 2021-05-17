import React from 'react'
import styled from "styled-components";

const MainHeader = styled.h1`
    font-size: 3rem;
    margin-bottom: 0.5rem;
`

const SubHeader = styled.h2`
    font-weight: 600;   
    margin-top: 0; 
`

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
